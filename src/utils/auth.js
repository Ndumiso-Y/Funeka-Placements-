const STORAGE_KEY = "funeka_staff_session_v1";
const USERS_KEY = "funeka_staff_users_v1";

/**
 * Phase 1 foundation:
 * - Admin-created accounts only
 * - No public self-signup
 *
 * TODO: Re-enable staff access only after integrating real backend
 * authentication (Supabase / Firebase / custom API). Do not ship mock
 * credentials in production.
 */
export function seedDefaultUsers() {
  const existing = JSON.parse(localStorage.getItem(USERS_KEY) || "null");
  if (existing && Array.isArray(existing) && existing.length > 0) return;

  localStorage.setItem(USERS_KEY, JSON.stringify([]));
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
