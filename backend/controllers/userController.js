const user = require("../modals/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const db = require("../routes/db")
const signup = async (req,res)=>{
    const{username,email,password}=req.body;

  //Existing User Check
  try{
    const existinguser = await user.findOne({where:{ email:email }});
     if(existinguser)
       return res.status(400).json({message:"User already exists"});
    
       const hashedPassword = await bcrypt.hash(password,10);
       const result = await user.create({
        email:email,
        password:hashedPassword,
        username:username
       });

       const token = jwt.sign({email:result.email,id:result.id,username:result.username,password:result.password},"abc")
       res.status(201).json({user:result,token});
  }
  catch(error){
    console.log(error);
    res.status(500).json({message:"SOmething wet wrong"})
  }

  //Hashed Password
  //User Creation
  //Token Generation

}
const signin = async (req,res)=>{
    const{email,password}=req.body;
    try{
        const existinguser = await user.findOne({where:{ email:email }});
        if(!existinguser)
        {
            return res.status(404).json({message:"User not found"});
        }
        const matchPassword = await bcrypt.compare(password,existinguser.password);
        if(!matchPassword){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const token = jwt.sign({email:existinguser.email,id:existinguser.id,username:existinguser.username,password:existinguser.password},"abc")
       res.status(201).json({user:existinguser,token});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:"Something went wrong"})
    }
}
module.exports={signin,signup}