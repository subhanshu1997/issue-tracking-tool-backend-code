const mongoose=require('mongoose')
const Schema=mongoose.Schema
let notificationSchema=new Schema(
    {
        title:{
            type:String,
            default:''
        },
        userId:{
            type:String,
            default:''
        },
        action:{
            type:String,
            default:''
        },
        message:{
            type:String,
            default:''
        }
    }
)
mongoose.model('notificationSchema',notificationSchema)