const logger = require('./../libs/loggerLib')
const response = require('./../libs/responseLib')
const check = require('./../libs/checkLib')
// const cookie=require('ngx-cookie-service')
// const cookie=require('cookies')
// const ls=require('node-localstorage').LocalStorage
// const ls=require('local-storage')
const ss=require('node-sessionstorage')

let isAuthenticated = (req,res,next)=>{
     console.log("Auth Token",req.body.authToken)
    // ls.ge
    // console.log(localStorage.getItem('test'))
    if(req.body.authToken){
        // console.log('hello Auth')
        // if(req.params.authToken == "admin" || req.query.authToken == "admin" || req.header('authToken')=="admin"){
        //     req.user={fullName:'Admin',useId:'Admin'}
        //     next()
        // }
        // else{
        //     logger.error('Incorrect authentication token','Authentication Middleware',5)
        //     let apiResponse = response.generate(true,'Incorrect authentication token',403)
        //     res.send(apiResponse)
        // }
        next()
    }else{
        logger.error('Authentication Token Missing','Authentication Middleware',5)
        let apiResponse = response.generate(true,'Authentication Token Is Missing In Request')
        res.send(apiResponse)
    }
}
module.exports={
    isAuthenticated : isAuthenticated
}