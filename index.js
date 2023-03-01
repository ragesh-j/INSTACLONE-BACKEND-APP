const userRoute=require("./Routes/Route")
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
require("dotenv").config();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/",userRoute)
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err){
    console.log(err)
    }
    else{
        console.log("succesfully connected")
    }
})

app.listen(8080,()=>{
    console.log("successfully connected")
})