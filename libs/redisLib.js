const check=require('./checkLib.js')
const redis=require('redis')
let client = redis.createClient()
client.on('connect',()=>{
    console.log("Redis connection successfully opened")
})

let getAllUsersInHash = (hashName,callback)=>{
    client.HGETALL(hashName,(err,result)=>{
        if(err){
            console.log(err)
            callback(err,null)
        }else if(check.isEmpty()){
            console.log("online user list is empty")
            console.log(result)
            callback(null,{})
        }
        else{
            console.log(result)
            callback(null,result)
        }
    })
}
let setANewUserInHash = (hashName,key,value,callback)=>{
    client.HMSET(hashName,[   
    ],(err,result)=>{
        if(err){
            console.log(err)
            callback(err,null)
        }else {
            console.log("user has been set in the hash map")
            console.log(result)
            callback(null,result)
        }
    })
}
let deleteUserFromHash = (hashName,key)=>{
    client.HDEL(hashName,key)
    return true
}
modult.exports={
    getAllUsersInHash:getAllUsersInHash,
    setANewUserInHash:setANewUserInHash,
    deleteUserFromHash:deleteUserFromHash
}