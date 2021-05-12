import { subscribe } from "../State/subscribe";

/**
 * Refetch data from controller when prompted to on statechanged
 */
export const request = (() => {
  subscribe('stateChanged', () => {
    // fetchall
  });

  return {
    get: () => {

    }
  }
})();
