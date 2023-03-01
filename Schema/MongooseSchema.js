const mongoose=require("mongoose")
const userDataSchema=new mongoose.Schema({
    name:String,
    location:String,
    url:String,
    description:String,
    postedAt:{
        type:Date,
        default:Date.now
    }
}) 


const userData=mongoose.model("UserData",userDataSchema)

module.exports=userData
