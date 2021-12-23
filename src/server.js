//Server API

import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();
const PORT = 4000;

const handleListen = () => console.log(`Listening on http://localhost:${PORT}`);
const server = http.createServer(app);
const io = SocketIO(server); //socket.io server

io.on("connection", (socket) => {
  //socket.io connection
  socket.onAny((event, arg1) => {
    // 모두 듣는다
    console.log(`Socket event : ${event}`);
  });
  socket.on("event name", (data, arg1, arg2, callback) => {
    //socket.on(eventName, (<string> | <symbol> callback <Function>))
    console.log(data, arg1, arg2);
    callback(argment);
  });
  socket.join("roomName"); //방에 들어간다
  socket.leave("roomName"); //방에서 떠난다
  socket.to("roomName").emit("event name", data); //전체 방송한다
  socket.emit("event name", data); //소켓에 이벤트를 추가한다
});

server.listen(PORT, handleListen);
