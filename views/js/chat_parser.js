/* eslint-disable quotes */
/* eslint-disable no-undef */

const generateHTML = (message) => {
  const message_left = document.createElement("li");
  const avatar = document.createElement("div");
  const text_wrapper = document.createElement("div");
  const text = document.createElement("div");

  message_left.classList.add("message");

  avatar.classList.add("avatar");
  avatar.textContent = message.name;

  text_wrapper.classList.add("text_wrapper");

  text.classList.add("text");
  text.textContent = message.chat_message;

  text_wrapper.appendChild(text);
  message_left.append(avatar, text_wrapper);

  document.querySelector(".messages").append(message_left);
};

const messageParser = (messages) => {
  return messages.map((message) => generateHTML(message));
};

messageParser(messages);
