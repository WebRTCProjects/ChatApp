import { reactive } from 'vue';
import { Server } from 'socket.io';
export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3000';

const socket = io(URL);

export default socket;
