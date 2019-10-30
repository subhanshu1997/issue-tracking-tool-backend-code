const mongoose=require('mongoose')
const Schema=mongoose.Schema
let commentSchema=new Schema(
    {
        title:{
            type:String,
            default:''
        },
        comment:{
            type:String,
            default:''
        },
        userName:{
            type:String,
            default:''
        }
    }
)
mongoose.model('commentSchema',commentSchema)