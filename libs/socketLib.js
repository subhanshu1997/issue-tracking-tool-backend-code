/**
 * modules dependencies.
 */
const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const tokenLib = require("./tokenLib.js");
const ls=require('local-storage')
const notification=mongoose.model('notificationSchema')

let setServer = (server) => {
    console.log("Hello")
    let allOnlineUsers = []

    let myIo = socketio.listen(server);

    // let myIo = io.of('')

    myIo.sockets.on('connection',(socket) => {

        console.log("on connection--emitting verify user");
        // myIo.emit("verifyUser", "");
        // code to verify the user and make him online
        // socket.on('set-user',() => {

            // socket.on('set-user',(authToken) => {

            //     console.log("set-user called")
            //     tokenLib.verifyClaimWithoutSecret(authToken,(err,user)=>{
            //         if(err){
            //             socket.emit('auth-error', { status: 500, error: 'Please provide correct auth token' })
            //         }
            //         else{
    
            //             console.log("user is verified..setting details");
            //             let currentUser = user.data;
            //             // setting socket user id 
            //             socket.userId = currentUser.userId
            //             let fullName = `${currentUser.firstName} ${currentUser.lastName}`
            //             console.log(`${fullName} is online`);
            //             socket.emit(currentUser.userId,"You are online")
    
            //             let userObj = {userId:currentUser.userId,fullName:fullName}
            //             allOnlineUsers.push(userObj)
            //             console.log(allOnlineUsers)
            //             socket.room='ed-chat'
            //             socket.join(socket.room)
            //             socket.to(socket.room).broadcast.emit('online-user-list',allOnlineUsers)
    
            //         }
    
    
            //     })
              
            // }) 


        socket.on('disconnect', () => {
            // disconnect the user from socket
            // remove the user from online list
            // unsubscribe the user from his own channel

            console.log("user is disconnected");
            // console.log(socket.connectorName);
            console.log(socket.userId);
            var removeIndex = allOnlineUsers.map(function(user) { return user.userId; }).indexOf(socket.userId);
            allOnlineUsers.splice(removeIndex,1)
            console.log(allOnlineUsers)
            socket.to(socket.room).broadcast.emit('online-user-list',allOnlineUsers)
            socket.leave(socket.room)


        }) // end of on disconnect


        socket.on('issue-raised',(data)=>{
            myIo.sockets.emit(data,"An Issue has been reported to you")
        })

        socket.on('edit-issue',(data)=>{
            data.action="Edit"
            for(let object of data.userId){
                let newNotification=new notification({
                    title:data.title,
                    userId:object,
                    action:data.action,
                    message:"Issue with title "+data.title+" has been edited"
                })
                newNotification.save((err,notificationData)=>{
                    if(err){
                        console.log("Some error occured"+err)
                    }
                    else{
                        console.log("Data Saved")
                    }
                })
                myIo.sockets.emit(object,data)
            }
        })

        socket.on('delete-issue',(data)=>{
            data.action="Delete"
            for(let object of data.userId){
                let newNotification=new notification({
                    title:data.title,
                    userId:object,
                    action:data.action,
                    message:"Issue with title "+data.title+" has been deleted"
                })
                newNotification.save((err,notificationData)=>{
                    if(err){
                        console.log("Some error occured"+err)
                    }
                    else{
                        console.log("Data Saved")
                    }
                })
                myIo.sockets.emit(object,data)
            }
        })


        socket.on('comment-issue',(data)=>{
            data.action="Comment"
            for(let object of data.userId){
                let newNotification=new notification({
                    title:data.title,
                    userId:object,
                    action:data.action,
                    message:"A comment has been posted on issue with title "+data.title
                })
                newNotification.save((err,notificationData)=>{
                    if(err){
                        console.log("Some error occured"+err)
                    }
                    else{
                        console.log("Data Saved")
                    }
                })
                myIo.sockets.emit(object,data)
            }
        })
        // socket.on('chat-msg',(data)=>{
        //     console.log("socket chat-msg called")
        //     console.log(data)
        //     data['chatId']=shortid.generate()
        //     console.log(data)
        //     setTimeout(function(){
        //         eventEmitter.emit('save-chat',data)
        //     },2000)
        //     myIo.emit(data.receiverId,data)
        // })

        // socket.on('typing',(fullName)=>{
        //     socket.to(socket.room).broadcast.emit('typing',fullName)
        // })
    });

}
// eventEmitter.on('save-chat',(data)=>{
//     let newChat=new chatModel({
//         chatId:data.chatId,
//         senderName:data.senderName,
//         senderId:data.senderId,
//         receiverName:data.receiverName || '',
//         receiverId:data.receiverId || '',
//         message:data.message,
//         chatRoom:data.chatRoom,
//         createdOn:data.createdOn
//     })
//     newChat.save((err,result)=>{
//         if(err){
//             console.log(`error occured: $(err)`)
//         }
//         else if(result == undefined || result == null || result ==""){
//             console.log("Chat is not saved")
//         }
//         else{
//             console.group("Chat saved")
//             console.log(result)
//         }
//     })
// })

module.exports = {
    setServer: setServer
}
