/* eslint-disable quotes */
/* eslint-disable no-undef */

const socket = io();

const send = document.querySelector(".send_button");

send.addEventListener("click", () => {
  const input = document.querySelector(".message_input");

  const message = {
    user_id: user[user.length - 1].user_id,
    text: input.value,
  };

  if (message.text.trim()) socket.emit("chatter", message);

  input.value = "";
});

socket.on("response", (data) => {
  // eslint-disable-next-line no-console
  console.log("client-side", data);
  newMessage(data);
});

socket.on("data", (data) => {
  document.getElementById("data").innerHTML = "Received " + data;
});
