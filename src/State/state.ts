import { publish } from "./publish";

export const state = (() => {
  let _state = new Proxy({}, {
    set: function(state: {[key: string]: unknown}, key: string, value: unknown) {

      state[key] = value;

      // Publishes to events;
      publish('stateChanged', _state);

      return true;
    }
  });

  return _state;
})();

/**
 * We'll see if we need
 */
// export function setState() {

// }
