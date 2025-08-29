 /**
  * PUBLIC_INTERFACE
  * Lightweight store placeholder. Replace with Redux or other state management as needed.
  */
export const store = {
  state: {},
  setState(partial) {
    this.state = { ...this.state, ...partial };
  }
};
