import { Navigate, Outlet } from "react-router-dom";
import { isAuthed } from "../utils/auth.js";

export default function ProtectedRoute() {
  if (!isAuthed()) return <Navigate to="/staff/login" replace />;
  return <Outlet />;
}
