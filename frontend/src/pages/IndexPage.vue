<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="main-area">
      <div :class="[connected ? hide : display]">
        <p class="welcome-title">Welcome to my chat app</p>
        <q-form @submit.prevent="connectToChat">
          <div class="input-label">Username</div>
          <q-input outlined v-model="username" class="first-input"></q-input>
          <div class="row justify-end">
            <q-btn class="enter-button" @click="connectToChat">
              Enter to Chat
            </q-btn>
          </div>
        </q-form>
      </div>
      <div :class="[connected ? display : hide]" class="messages">
        <p class="title">Springboot and Vue3 Quasar Stomp-Websocket</p>
        <q-separator />
        <div class="messages--body">
          <div id="scrollArea" class="messages--conversation-area">
            <template v-for="message in store.getContent" :key="message">
              <span v-html="message"></span>
            </template>
          </div>
          <q-form
            @submit.prevent="sendMessage"
            class="messages--input row absolute-bottom"
          >
            <q-input
              outlined
              v-model="message"
              class="second-input"
              dense
              @focus="message = message == placeholder ? '' : message"
            ></q-input>
            <q-btn
              label="Send"
              class="send-button q-ml-lg shadow-1"
              icon-right="send"
              no-caps
              unelevated
              @click="sendMessage"
            />
          </q-form>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { initSocket, enterToChat, send } from 'src/socket';
import { useMessageStore } from 'src/stores/message-store';
import { useQuasar } from 'quasar';

const store = useMessageStore();

let placeholder = 'Type a message here ...';

const username = ref('');
const connected = ref(false);
const display = ref('show');
const hide = ref('hidden');
const message = ref(placeholder);
const $q = useQuasar();

function connectToChat() {
  if (username.value == '') {
    $q.notify({
      message: 'Username cannot be empty!',
      color: 'negative',
    });
    return;
  }
  store.username = username.value;
  connected.value = enterToChat(username.value);
  username.value = '';
}

function sendMessage() {
  if (message.value === placeholder) {
    $q.notify({
      message: 'Write something!',
      color: 'negative',
    });
    return;
  }
  send(username.value, message.value);
  message.value = '';
}

onMounted(() => {
  initSocket();
});
</script>
