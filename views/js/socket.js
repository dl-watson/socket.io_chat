/* eslint-disable quotes */
/* eslint-disable no-undef */

const socket = io();

document.querySelector(".text").addEventListener("click", () => {
  const input = document.querySelector(".message_input");
  const message = input.value;
  if (message.trim() !== "") socket.emit("chatter", message);
  input.value = "";
  return false;
});

socket.on("chatter", (message) => {
  const message_left = document.createElement("li");
  const avatar = document.createElement("div");
  const text_wrapper = document.createElement("div");
  const text = document.createElement("div");

  message_left.classList.add("message");
  // avatar.classList.add("avatar");
  text_wrapper.classList.add("text_wrapper");
  text.classList.add("text");
  text.textContent = message;

  text_wrapper.appendChild(text);
  message_left.append(avatar, text_wrapper);

  document.querySelector(".messages").append(message_left);
});
