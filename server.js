const express=require("express")
const app=express()
const router=express.Router()

app.get("/",(req,res)=>{
    res.send("HELLO WORLD")
})
PORT=3000
app.listen(PORT,()=>{
    console.log("Server is running sucessfully")
})

const users=[
    {email:"Ram12@gmail.com",password:"Ram_12"},
    {email:"Sham12@gmail.com",password:"Sham_12"},
    {email:"Bham12@gmail.com",password:"Bham_12"},
];

router.put("/Update",async()=>{
    try{
        const {email,password}=req.body
        const Email=await users.find({email:email})
        if(Email){
            const PU =await users.save(password)
            res.status(201).json({message:"User Updated",user:PU})

        }
        
        

    }
    catch(erro){
        res.status(500).json({error:"Email not Found "})
    }
})

router.delete("/delete",()=>{
    const {email}=req.body
    const Email=  users.findone({email:email})
    try{
        const DU= users.delete(Email)
        res.status(201).json({message:"User delted Sucessfully"})

    }
    catch(error){
       res.status(500).json({error:"Email Not Found "})
    }
})