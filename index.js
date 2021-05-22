const express = require('express')
const path = require('path')
const app =express()
const http = require('http')
const { Server } = require("socket.io");
const server = http.createServer(app)
const io = new Server(server)


io.on('connection', (socket) => {
    console.log("added")
    socket.on('chat message', (msg) => {
        console.log("got emiited msg   => " + msg)
      io.emit('chat message', msg);
    });
  });


app.get('/',(req,res)=>{    
    console.log(path.join(__dirname,'public'))
    res.sendFile(__dirname+'/public/index.html')    
})

server.listen(3000,()=>{
    console.log("server is running ")
})