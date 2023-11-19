<template>
  <q-page class="row items-center justify-evenly">
    <div id="username-page">
      <div class="username-page-container">
        <h1 class="title">Type your username to enter to chat</h1>
        <form id="usernameForm" name="usernameForm">
          <div class="form-group">
            <input
              type="text"
              id="name"
              placeholder="username"
              autocomplete="off"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="form-control">Start Chatting</button>
          </div>
        </form>
      </div>
    </div>
    <div id="chat-page" class="hidden">
      <div class="chat-container">
        <div class="chat-header">
          <h2>Chat Demo</h2>
        </div>
        <div class="connecting">Connecting ...</div>
        <ul id="messageArea"></ul>
        <form id="messageForm" name="messageForm">
          <div class="form-group">
            <div class="input-group clearfix">
              <input
                type="text"
                id="message"
                placeholder="Type a message ..."
                autocomplete="off"
                class="form-control"
              />
              <button type="submit" class="primary">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// const URL = process.env.API;
// var usernamePage = document.querySelector('#username-page');
// var chatPage = document.querySelector('#chat-page');
// var usernameForm = document.querySelector('#usernameForm');
// var messageForm = document.querySelector('#messageForm');
// var messageInput = document.querySelector('#message');
// var messageArea = document.querySelector('#messageArea');
// var connectinElement = document.querySelector('.connecting');

// var stompClient = null;
// var username = null;
// var colors = [
//   'red',
//   'green',
//   'blue',
//   'yellow',
//   'pink',
//   'purple',
//   '#d636b1',
//   '#ec2996',
//   '#008bd3',
// ];

// function connect(event) {
//   // username = document.querySelector('#name').value.trim();
//   // if (username) {
//   //   usernamePage.classList.add('hidden');
//   //   chatPage.classList.remove('hidden');
//   //   var socket = io('/ws');
//   //   stompClient = Stomp.over(socket);
//   // }
// }
</script>
