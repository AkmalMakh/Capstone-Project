let currentmessageId = 1;
function createmessage(user, messageText){
    return{
          _id: currentmessageId++,
          text: messageText,
          createdAt: new Date(),
          user: {
            _id: user.userId,
            name: user.username,
            avatar: user.avatar,
            bio: user.bio,
            username: user.name
          },
        
      };
}

function handleMessage(socket, users){

    socket.on("message", messageText =>{
      
        const user = users[socket.id];
        const message = createmessage(user , messageText)
        console.log(message);
        socket.broadcast.emit("message",message);
    });
}
module.exports = {handleMessage}