const STORAGE_KEY = "funeka_staff_session_v1";
const USERS_KEY = "funeka_staff_users_v1";

/**
 * Phase 1 foundation:
 * - Admin-created accounts only
 * - No public self-signup
 *
 * For now, we ship a default admin user to allow the portal to run immediately.
 * In production, replace with a real backend (Supabase / Firebase / custom API).
 */
export function seedDefaultUsers() {
  const existing = JSON.parse(localStorage.getItem(USERS_KEY) || "null");
  if (existing && Array.isArray(existing) && existing.length > 0) return;

  const defaultUsers = [
    {
      email: "admin@funekaplacements.co.za",
      password: "Funeka@123",
      role: "Admin",
      name: "Funeka Admin",
    },
  ];

  localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
}

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

export function login(email, password) {
  const users = getUsers();
  const found = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!found) return { ok: false, message: "Invalid email or password." };

  const session = {
    email: found.email,
    name: found.name,
    role: found.role,
    at: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  return { ok: true, session };
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getSession() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
}

export function isAuthed() {
  return !!getSession();
}
