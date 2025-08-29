import { apiRequest } from "./apiClient";

/**
 * PUBLIC_INTERFACE
 * Authentication service.
 */
export const authService = {
  login: (email, password) => apiRequest("/auth/login", { method: "POST", body: { email, password } }),
  register: (payload) => apiRequest("/auth/register", { method: "POST", body: payload }),
  resetPassword: (email) => apiRequest("/auth/reset-password", { method: "POST", body: { email } }),
  me: () => apiRequest("/auth/me")
};
