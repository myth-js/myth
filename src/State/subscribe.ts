const events: {[key: string]: Array<unknown>} = {};

export function subscribe(event: string, callback: (...args: Array<unknown>) => unknown) {
  if(events.hasOwnProperty(event)) {
    events[event] = [];
  }

  return events[event].push(callback);
 }