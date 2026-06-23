import { supabase } from "../lib/supabaseClient.js";
import { hasSupabaseConfig } from "../lib/env.js";

/**
 * Returns a fallback error if Supabase is not configured.
 */
function checkConfig() {
  if (!hasSupabaseConfig || !supabase) {
    return {
      ok: false,
      message: "Authentication is currently unavailable. Backend integration is missing.",
    };
  }
  return { ok: true };
}

/**
 * Logs in the user and ensures they have a staff profile before returning success.
 */
export async function login(email, password) {
  const configCheck = checkConfig();
  if (!configCheck.ok) return configCheck;

  try {
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      return { ok: false, message: authError.message };
    }

    if (!authData.user) {
      return { ok: false, message: "Login failed. No user returned." };
    }

    // Verify staff profile exists
    const profile = await getStaffProfile(authData.user.id);
    if (!profile) {
      await supabase.auth.signOut();
      return { ok: false, message: "Your account is not authorised for staff portal access." };
    }

    return { ok: true, session: authData.session, profile };
  } catch (err) {
    return { ok: false, message: "An unexpected error occurred during login." };
  }
}

/**
 * Logs out the user.
 */
export async function logout() {
  if (!supabase) return;
  await supabase.auth.signOut();
}

/**
 * Returns the current active session.
 */
export async function getSession() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session;
}

/**
 * Returns the current authenticated user.
 */
export async function getCurrentUser() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getUser();
  return data.user;
}

/**
 * Checks if there is an active authenticated session.
 */
export async function isAuthed() {
  const session = await getSession();
  return !!session;
}

/**
 * Retrieves the staff profile for a given user ID from `public.staff_profiles`.
 */
export async function getStaffProfile(userId) {
  if (!supabase || !userId) return null;
  
  const { data, error } = await supabase
    .from("staff_profiles")
    .select("*")
    .eq("id", userId)
    .single();
    
  if (error || !data) return null;
  return data;
}

/**
 * Checks if the current session has a valid staff profile.
 */
export async function isStaffUser() {
  const user = await getCurrentUser();
  if (!user) return false;
  
  const profile = await getStaffProfile(user.id);
  return !!profile;
}

/**
 * Checks if the current session belongs to an admin.
 */
export async function isAdminUser() {
  const user = await getCurrentUser();
  if (!user) return false;
  
  const profile = await getStaffProfile(user.id);
  return profile?.role === "admin";
}
