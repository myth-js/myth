// IIFE
export const events = (() => {
  let _events: {[key: string]: Array<(args?: Array<unknown> | unknown) => unknown>} = {};
  return {
    getEvents: () => ({..._events}),
    addEvent: (key: string, callback: () => unknown) => {
      const event = _events[key];
      if(event) {
        _events = {..._events, [key]: [...event, callback]};
      } else {
        _events = {..._events, [key]: [callback]};
      }
    },
    clearEvents: () => _events = {},
    getEventByKey: (key: string): Array<(args?: Array<unknown> | unknown) => unknown> => _events[key],
    setEvents: (events: {[key: string]: Array<(args?: Array<unknown> | unknown) => unknown>}) => _events = {...events}
  };
})();
