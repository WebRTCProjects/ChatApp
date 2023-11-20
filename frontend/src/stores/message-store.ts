import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    username: '',
    content: [''],
  }),
  getters: {
    getUsername: (state) => state.username,
    getContent: (state) => state.content,
  },
  actions: {
    addToContent(message: string) {
      this.content.push('<p>' + message + '</p>');
    },
  },
});
