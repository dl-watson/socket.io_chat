/* eslint-disable quotes */
/* eslint-disable no-undef */
const socket = io();

const form = document.querySelector("#signin");
const inputs = document.querySelector("#signin").elements;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    email: formatter("email"),
    password: formatter("password"),
  };

  socket.emit("sign-in", data);

  window.location.href = "/chat";
});

const formatter = (type) => {
  return inputs[`${type}`].value;
};
