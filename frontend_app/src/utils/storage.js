 /**
  * PUBLIC_INTERFACE
  * Local storage wrappers with JSON handling.
  */
export const storage = {
  get(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // no-op
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};
