const mongoose=require('mongoose')
const Schema=mongoose.Schema
let issueSchema=new Schema(
    {
        status:{
            type:String,
            default:'running',
        },
        title:{
            type:String,
            default:''
        },
        reporter:{
            type:String,
            default:''
        },
        assignto:{
            type:String,
            default:''
        },
        assignToName:{
            type:String,
            default:''
        },
        date:{
            type:Date,
            default:''
        },
        description:{
            type:String,
            default:''
        }
    }
)
mongoose.model('Issue',issueSchema)