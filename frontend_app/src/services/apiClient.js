import { getEnv } from "../config/env";

/**
 * PUBLIC_INTERFACE
 * Minimal API client using fetch.
 */
export async function apiRequest(path, { method = "GET", headers = {}, body } = {}) {
  const baseURL = getEnv("VITE_API_BASE_URL") || "";
  const url = `${baseURL}${path}`;
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    body: body ? JSON.stringify(body) : undefined
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  const contentType = res.headers.get("content-type") || "";
  return contentType.includes("application/json") ? res.json() : res.text();
}
