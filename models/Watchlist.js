const mongoose=require('mongoose')
const Schema=mongoose.Schema
let watchListSchema=new Schema(
    {
        title:{
            type:String,
            default:''
        },
        userId:{
            type:Array,
            default:[]
        }
    }
)
mongoose.model('watchListSchema',watchListSchema)