import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getSession, getStaffProfile } from "../utils/auth.js";
import { supabase } from "../lib/supabaseClient.js";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute() {
  const [status, setStatus] = useState("loading"); // 'loading', 'authenticated', 'unauthenticated', 'unauthorized'
  const location = useLocation();

  useEffect(() => {
    async function checkAuth() {
      try {
        const session = await getSession();
        if (!session) {
          setStatus("unauthenticated");
          return;
        }

        const profile = await getStaffProfile(session.user.id);
        if (!profile) {
          setStatus("unauthorized");
          return;
        }

        setStatus("authenticated");
      } catch (err) {
        setStatus("unauthenticated");
      }
    }

    checkAuth();

    if (supabase) {
      const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === "SIGNED_OUT" || !session) {
          setStatus("unauthenticated");
        } else if (event === "SIGNED_IN") {
          // Verify profile again on sign in
          const profile = await getStaffProfile(session.user.id);
          setStatus(profile ? "authenticated" : "unauthorized");
        }
      });

      return () => {
        authListener?.subscription?.unsubscribe();
      };
    }
  }, []);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-funeka-bg">
        <Loader2 className="h-10 w-10 animate-spin text-funeka-brand" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <Navigate to="/staff/login" replace state={{ from: location.pathname }} />;
  }

  if (status === "unauthorized") {
    // If authenticated but no staff profile, redirect with error
    return (
      <Navigate 
        to="/staff/login" 
        replace 
        state={{ error: "Your account is not authorised for staff portal access." }} 
      />
    );
  }

  return <Outlet />;
}
