import {events} from '../../src/State/events';

describe('Events', () => {
  beforeEach(() => {
    events.clearEvents();
  });

  it('Get events returns an object', () => {
    expect(typeof events.getEvents()).toBe('object');
  });

  it('events per key is an array', () => {
    events.addEvent('test', () => 0);
    expect(events.getEventByKey('test').length).toBe(1);
  });

  it('clears events', () => {
    events.addEvent('test', () => 0);
    expect(Object.entries(events.getEvents()).length).toBe(1);
    events.clearEvents();
    expect(Object.entries(events.getEvents()).length).toBe(0);
  });

  it('Sets an event and adds', () => {
    expect(Object.entries(events.getEvents()).length).toBe(0);
    events.addEvent('test', () => 0);
    expect(Object.entries(events.getEvents()).length).toBe(1);
  });

  it('Persists in state and changes', () => {
    events.addEvent('test', () => 0);
    events.addEvent('test1', () => 1);
    expect(Object.entries(events.getEvents()).length).toBe(2);
  });
})