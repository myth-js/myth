import { events } from "./events";

export function publish(key: string, args: unknown) {
  const event = events.getEventByKey(key);
  
  if(!event) {
    console.warn('No events listed');
    if(process.env.NODE_ENV === 'development') debugger;
    return;
  }

  return event.map((callback) => callback(args));
}
