/* eslint-disable quotes */
/* eslint-disable no-undef */

const socket = io();

const send = document.querySelector(".send_button");

send.addEventListener("click", () => {
  const input = document.querySelector(".message_input");

  const message = {
    user_id: 1,
    text: input.value,
  };

  if (message.text.trim() !== "") socket.emit("chatter", message);

  input.value = "";

  return false;
});

socket.on("response", (message) => {
  console.log("response event", message);
  // the message here contains: user_id, text and id (the messages table)
  generateHTML(message);
});
