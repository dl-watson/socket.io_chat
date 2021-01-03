/* eslint-disable no-undef */
/* eslint-disable quotes */
const socket = io();

const form = document.querySelector("#signup");
const inputs = document.querySelector("#signup").elements;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: formatter("name"),
    email: formatter("email"),
    password: formatter("password"),
  };

  socket.emit("sign-up", data);

  alert("success");

  window.location.href = "/auth/signin";
});

const formatter = (type) => {
  return inputs[`${type}`].value;
};
