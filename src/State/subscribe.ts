import { events } from "./events";

export function subscribe(key: string, callback: (args?: unknown) => unknown) {
  return events.addEvent(key, callback)
}
