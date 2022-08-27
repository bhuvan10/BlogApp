const jwt = require("jsonwebtoken");
const fetchuser = async (req,res,next)=>{
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401),send({error:"please authenticate using valid token"})
    }
    try {
        const data =  jwt.verify(token,"abc");
    req.user =await data;
    next();
        
    } catch (error) {
        res.status(401).send({error:"please authenticate using valid token"})
    }
}
module.exports=fetchuser;