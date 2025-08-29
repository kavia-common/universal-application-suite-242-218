 /**
  * PUBLIC_INTERFACE
  * Read environment variables via import.meta.env with fallback.
  */
export function getEnv(key) {
  if (typeof import.meta !== "undefined" && import.meta.env && key in import.meta.env) {
    return import.meta.env[key];
  }
  return undefined;
}
