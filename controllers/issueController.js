const mongoose=require('mongoose')
const issue=mongoose.model('Issue')
const response=require('../libs/responseLib')
const logger=require('../libs/loggerLib')
const authModel=mongoose.model('Auth')
const User=mongoose.model('User')
const cookie=require('cookies')
const watchList=mongoose.model('watchListSchema')
const commentSchema=mongoose.model('commentSchema')
const notification=mongoose.model('notificationSchema')
let reportIssue=(req,res)=>{
    return new Promise((resolve,reject)=>{
        if(req.body.title && req.body.assignto && req.body.date && req.body.description && req.body.status){
            issue.findOne({'title':req.body.title},(err,data)=>{
                if(err){
                    let apiResponse=response.generate(true,"Some error Occured",null)
                    reject(apiResponse)
                    res.send(apiResponse)   
                }
                else{
                    if(data==null){
                        let newIssue=new issue({
                            title:req.body.title,
                            assignto:req.body.assignto,
                            assignToName:req.body.assignToName,
                            date:req.body.date,
                            description:req.body.description,
                            status:req.body.status,
                            reporter:req.body.name
                        })
                        newIssue.save((err,newIssue)=>{
                            if(err){
                                console.log(err)
                                logger.error(err.message, 'issueController: reportIssue', 10)
                                let apiResponse = response.generate(true, 'Failed to report new Issue', 500, null)
                                reject(apiResponse)
                            }
                            else{
                                let newIssueObj=newIssue.toObject()
                                resolve(newIssueObj)
                                let apiResponse=response.generate(false,"Issue Reported Succesfully",200,newIssueObj)
                                res.send(apiResponse)
                            }
                        })
                    }
                    else{
                    let apiResponse=response.generate(true,"Issue with the same title already exist.Please change the title",data)
                    reject(apiResponse)
                    res.send(apiResponse)
                    }                    
                }
            })
        }
        else{
            logger.error('Field Missing During Issue Reporting', 'issueController: reportIssue()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
        }
    })
}


let fetchIssues=(req,res)=>{
    return new Promise((resolve,reject)=>{
        issue.find({'assignto':req.body.userId},(err,issueDetails)=>{
            if(err){
                reject()
            }else{
                console.log("Issue Details"+issueDetails)
            resolve()
            let apiResponse=response.generate(false,"Issue Fetched Succesfully",200,issueDetails)
            res.send(apiResponse)
            }
        })
    })
}

let searchIssue=(req,res)=>{
    return new Promise((resolve,reject)=>{
        if(req.body.identifier==''){
            issue.find({},(err,data)=>{
                if(err){
                    reject()
                    let apiResponse=response.generate(false,"Some error occured",500,null)
                    res.send(apiResponse)
                }
                else{
                    resolve()
                    let apiResponse=response.generate(false,"Search Complete",200,data)
                    res.send(apiResponse)
                }
            })
        }
        else{
            issue.find({$or:[{'title':{$regex:req.body.identifier}},{'reporter':{$regex:req.body.identifier}},{'status':{$regex:req.body.identifier}},{'description':{$regex:req.body.identifier}},{'assignto':{$regex:req.body.identifier}}]},(err,data)=>{
                console.log("data is"+data)
                if(err){
                    reject()
                    let apiResponse=response.generate(false,"Some error occured",500,null)
                    res.send(apiResponse)
                }
                else{
                    resolve()
                    let apiResponse=response.generate(false,"Search Complete",200,data)
                    res.send(apiResponse)
                }
            })
        }
    })
}


addToWatchList=(req,res)=>{
        return new Promise((resolve,reject)=>{
            watchList.findOne({'title':req.body.title},(err,data)=>{
                if(err){
                    reject()
                    let apiResponse=response.generate(false,"Some error occured",500,null)
                    res.send(apiResponse)

                }
                else{
                    if(data){
                        let updateArray=data.userId
                        if(updateArray.includes(req.body.userId))
                        {
                            updateArray.splice(updateArray.indexOf(req.body.userId),1)
                            watchList.findOneAndUpdate({'title':req.body.title},{'userId':updateArray},(err,data)=>{
                                if(err){
                                    reject()
                                    let apiResponse=response.generate(false,"Some error occured",500,null)
                                    res.send(apiResponse)
                                }
                                else{
                                    resolve()
                                    let apiResponse=response.generate(false,"Removed From WatchList",200,data)
                                    res.send(apiResponse)
    
                                }
                            })
                        }
                        else{
                        updateArray.push(req.body.userId)
                        watchList.findOneAndUpdate({'title':req.body.title},{'userId':updateArray},(err,data)=>{
                            if(err){
                                reject()
                                let apiResponse=response.generate(false,"Some error occured",500,null)
                                res.send(apiResponse)
                            }
                            else{
                                resolve()
                                let apiResponse=response.generate(false,"Added to WatchList",200,data)
                                res.send(apiResponse)

                            }
                        })
                    
                    }
                        
                    }
                    else{
                        let updateArray=[]
                        updateArray.push(req.body.userId)
                        let newWatchList=new watchList({
                            title:req.body.title,
                            userId:updateArray
                        })
                        newWatchList.save((err,data)=>{
                            if(err){
                                reject()
                                let apiResponse=response.generate(false,"Some error occured",500,null)
                                res.send(apiResponse)
                            }
                            else{
                                resolve()
                                let apiResponse=response.generate(false,"Added to WatchList",200,data)
                                res.send(apiResponse)

                            }
                        })

                    }
                }
            }
            )
        })
}


let fetchComments=(req,res)=>{
    return new Promise((resolve,reject)=>{
        commentSchema.find({'title':req.body.title},(err,data)=>{
            console.log("comment data"+data)
            if(err){
                reject()
                let apiResponse=response.generate(false,"Some error occured",500,null)
                res.send(apiResponse)
            }
            else if(data){
                resolve()
                let apiResponse=response.generate(false,"Comments Fetched",200,data)
                res.send(apiResponse)                
            }
        })
    })
}


let fetchNotifications=(req,res)=>{
    return new Promise((resolve,reject)=>{
        notification.find({'userId':req.body.userId},(err,data)=>{
            console.log("comment data"+data)
            if(err){
                reject()
                let apiResponse=response.generate(false,"Some error occured",500,null)
                res.send(apiResponse)
            }
            else if(data){
                resolve()
                let apiResponse=response.generate(false,"Notifications Fetched",200,data)
                res.send(apiResponse)                
            }
        })
    })
}


let postComment=(req,res)=>{
    return new Promise((resolve,reject)=>{
        if(req.body.title || req.body.comment || req.body.userName){
            let newComment=new commentSchema({
                title:req.body.title,
                comment:req.body.comment,
                userName:req.body.userName
            })
            newComment.save((err,data)=>{
                if(err){
                    reject()
                    let apiResponse=response.generate(false,"Some error occured",500,null)
                    res.send(apiResponse)
                }
                else{
                    resolve()
                    let apiResponse=response.generate(false,"Your Comment has been posted",200,data)
                    res.send(apiResponse)
                }
            })
        }
        else{
            reject()
            let apiResponse=response.generate(false,"One or more parameters missing",500,null)
            res.send(apiResponse)
        }
    })
}



let getWatchList=(req,res)=>{
    return new Promise((resolve,reject)=>{
        watchList.findOne({'title':req.body.title},(err,data)=>{
            if(err){
                reject()
                let apiResponse=response.generate(false,"Some error occured",500,null)
                res.send(apiResponse)
            }
            else if(data){
                resolve()
                let apiResponse=response.generate(false,"WatchList Fetched",200,data)
                res.send(apiResponse)
            }
        })
    })
}


let fetchAllIssues = (req, res) => {
    fetch = () => {
        return new Promise((resolve, reject) => {
            issue.find({}, (err, issueDetails) => {
                if (err) {
                    reject()
                } else {
                    resolve(issueDetails)
                }
            })
        })
    }
    updateFetched=(issueDetails)=>{
        return new Promise((resolve,reject)=>{
            let collection=issueDetails
            console.log("data is"+collection)
            resolve(issueDetails)
        })
    }
    fetch(req,res)
    .then(updateFetched)
    .then((resolve)=>{
        let apiResponse=response.generate(false,"Issue Fetched Succesfully",200,resolve)
            res.send(apiResponse)
    })
}


let fetchIssuesInit=(req,res)=>{
    return new Promise((resolve,reject)=>{
    User.find({'userId':{$ne:req.body.userId}},(err,data)=>{
             if(err){
            reject()
            let apiResponse=response.generate(true,"Information not fetched",404,null)
            res.send(apiResponse)
        }
        else{
            console.log(data)
            resolve()
            let apiResponse=response.generate(false,"Information fetched",404,data)
            res.send(apiResponse)
        }
    })
    })
}

let editIssue=(req,res)=>{
    console.log("Edit"+req.body)
    return new Promise((resolve,reject)=>{
        issue.findOneAndUpdate({'title':req.body.title},{'reporter':req.body.reporter,'assignto':req.body.assignto,'assignToName':req.body.assignToName,'date':req.body.date,'description':req.body.description,'status':req.body.status},(err,data)=>{
            if(err){
                reject()
            let apiResponse=response.generate(true,"Issue not Edited",500,null)
            res.send(apiResponse)
            }
            else{
            console.log(data)
            resolve()
            let apiResponse=response.generate(false,"Issue Edited Successfully",404,data)
            res.send(apiResponse)
            }
        })
    })
}


let isInWatchList=(req,res)=>{
    return new Promise((resolve,reject)=>{
        watchList.findOne({'title':req.body.title},(err,data)=>{
            if(err){
                reject()
                let apiResponse=response.generate(false,"Some error occured",500,null)
                res.send(apiResponse)
            }
            else if(data){
                let bool=data.userId.includes(req.body.userId)
                resolve()
                let apiResponse=response.generate(false,"Checked",500,bool)
                res.send(apiResponse)
            }
            else{
                resolve()
                let apiResponse=response.generate(false,"Some error occured",500,false)
                res.send(apiResponse)
            }
        })
    })
}

let fetchIssueData=(req,res)=>{
    return new Promise((resolve,reject)=>{
        console.log("Title is"+req.body.title)
        issue.findOne({'title':req.body.title},(err,data)=>{
            if(err){
                reject()
            let apiResponse=response.generate(true,"Issue not Fetched",500,null)
            res.send(apiResponse)
            }
            else if(data==null){
            let apiResponse=response.generate(false,"Issue doesnot exist",404,null)
            res.send(apiResponse)
            resolve()
            }
            else{
            resolve()
            let apiResponse=response.generate(false,"Issue Fetched Successfully",200,data)
            res.send(apiResponse)
            }
        })
    })
}


let deleteIssue=(req,res)=>{
    console.log("Edit"+req.body)
    return new Promise((resolve,reject)=>{
        issue.findOneAndRemove({'title':req.body.title},(err,data)=>{
            if(err){
                reject()
            let apiResponse=response.generate(true,"Issue not Deleted",500,null)
            res.send(apiResponse)
            }
            else{
            console.log(data)
            resolve()
            let apiResponse=response.generate(false,"Issue Deleted Successfully",404,data)
            res.send(apiResponse)
            }
        })
    })
}


module.exports={
    reportIssue:reportIssue,
    fetchIssues:fetchIssues,
    fetchIssuesInit:fetchIssuesInit,
    editIssue:editIssue,
    deleteIssue:deleteIssue,
    fetchIssueData:fetchIssueData,
    fetchAllIssues:fetchAllIssues,
    searchIssue:searchIssue,
    addToWatchList:addToWatchList,
    getWatchList:getWatchList,
    isInWatchList:isInWatchList,
    fetchComments:fetchComments,
    postComment:postComment,
    fetchNotifications:fetchNotifications
}