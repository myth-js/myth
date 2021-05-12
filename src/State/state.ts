import { publish } from "./publish";

const __state = (() => {
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

export function setState(state: {[key: string]: unknown}) {
  for (const key in state) {
    __state[key] = state[key];
  }
}

export const state = __state;
