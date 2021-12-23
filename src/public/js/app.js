//Client API
const socket = io();

//function

function callback() {
  console.log("callback functions");
}

//sockets

socket.on("event name", (data) => {
  console.log(data);
});

socket.emit("event name", data, arg1, arg2, callback);
