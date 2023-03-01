const UserData=require("../Schema/MongooseSchema")
const express=require("express")
const router=require("express").Router()
const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

router.get("/post",async (req,res)=>{
    try{
    const userData=await UserData.find().sort({postedAt:-1})
    
    res.status(200).json(userData)
    }
    catch (e){
        res.status(400).send("Failed to load")
    }
})
router.post("/post",async(req,res)=>{
    
    try{
        
        const userData= await UserData.create({
            name:req.body.name,
            location:req.body.location,
            url:req.body.url,
            description:req.body.description,
            postedAt:req.body.postedAt
        })
        res.status(200).json({message:"upload succesfully"})
    }
    catch (e){
        res.status(400).send("Failed to upload")
    }
})

module.exports=router