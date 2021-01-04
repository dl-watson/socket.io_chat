/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-undef */

const chatBehavior = () => {
  document
    .querySelector("li:last-child")
    .scrollIntoView({ behavior: "smooth" });
};

const newMessage = (message) => {
  const new_message = document.createElement("li");
  const avatar = document.createElement("div");
  const text_wrapper = document.createElement("div");
  const text = document.createElement("div");

  new_message.classList.add("message");

  avatar.classList.add("avatar");
  avatar.textContent = message.name.toLowerCase();

  text_wrapper.classList.add("text_wrapper");

  text.classList.add("text");
  text.textContent = message.chat_message;

  text_wrapper.appendChild(text);
  new_message.append(avatar, text_wrapper);

  document.querySelector(".messages").append(new_message);

  chatBehavior();
};

chatBehavior();
