/* eslint-disable quotes */
/* eslint-disable no-undef */

const socket = io();

document.querySelector(".send_button").addEventListener("click", () => {
  const input = document.querySelector(".message_input");

  const message = {
    user_id: user[user.length - 1].user_id,
    text: input.value,
  };

  if (message.text.trim()) socket.emit("chatter", message);

  input.value = "";
});

socket.on("response", (message) => {
  newMessage(message);
});
