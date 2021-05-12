import { setState, state } from '../../src/State/state';

describe('State', () => {
  it('Creates state', () => {
    setState({watchme: 'king'});
    expect(typeof state).toBe('object');
    setState({watchme: 'queen'});
    expect(Object.entries(state).length === 1);
  });
});