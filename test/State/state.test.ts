import { subscribe } from '../../src/State/subscribe';
import { state } from '../../src/State/state';

describe('State', () => {
  it('Creates state', () => {
    subscribe('stateChanged', (s) => console.log(s));
    state.x = 'yoursss';
  });
});