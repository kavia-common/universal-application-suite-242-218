import { apiRequest } from "./apiClient";

/**
 * PUBLIC_INTERFACE
 * User service.
 */
export const userService = {
  getProfile: () => apiRequest("/users/me"),
  updateProfile: (data) => apiRequest("/users/me", { method: "PUT", body: data })
};
