import { apiRequest } from "./apiClient";

/**
 * PUBLIC_INTERFACE
 * Cost service for cost-related APIs.
 */
export const costService = {
  getOverview: () => apiRequest("/costs/overview"),
  getForecast: () => apiRequest("/costs/forecast"),
  getRecommendations: () => apiRequest("/costs/recommendations")
};
