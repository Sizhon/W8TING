import {Youth} from "../src/Types";

export const sortQueue = (queue: Youth[]): Youth[] => {
  return queue.sort((a: Youth, b: Youth) => {
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  });
}