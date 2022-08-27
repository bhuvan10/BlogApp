const blog = require("../modals/Blog")


const allblogs =async (req,res)=>{
   try {
    const allblogs = await blog.findAll();
   
    return res.status(201).json({blogs:allblogs});
   } catch (error) {
    return res.status(400).json({message:"Encountered error"})
   }
}
const myblogs =async (req,res)=>{
    const email=req.user.email;
    try {
     const allblogs =await  blog.findAll({where:{ email:email }});
     if(!allblogs)
      return res.status(201).json({message:"No Blog to display"})
     else
     return res.status(201).json({blogs:allblogs});
    } catch (error) {
     return res.status(400).json({message:"Encountered error"})
    }
 }
 const blogid =async (req,res)=>{
   const id=req.header("id");
   try {
    const allblogs =await  blog.findOne({where:{ id:id }});
    if(!allblogs)
     return res.status(201).json({message:"No Blog to display"})
    else
    return res.status(201).json({blogs:allblogs});
   } catch (error) {
    return res.status(400).json({message:"Encountered error"})
   }
}
 const addblog =async (req,res)=>{
    const {title,description,imageurl}=req.body
    try {
        const result = await blog.create({
            email:req.user.email,
            author:req.user.username,
            title:title,
            description:description,
            imageurl:imageurl
           });
           res.status(201).json({blog:result});

    } catch (error) {
     return res.status(400).json({message:"Encountered error"})
    }
 }
 const editblog =async (req,res)=>{
    const {id,title,description,imageurl}=req.body;
    try {
        const result = await blog.update({
            title:title,
            description:description,
            imageurl:imageurl
           },{where : {id:id}});
           res.status(201).json({message: "updated succesfully"});

    } catch (error) {
     return res.status(400).json({message:"Encountered error"})
    }
 }
 const deleteblog =async (req,res)=>{
    const id=req.header("id");
    console.log(id);
    try {
        const result = await blog.destroy({where : {id:id}});
           res.status(201).json({message:"blog deleted"});

    } catch (error) {
     return res.status(400).json({id})
    }
 }
 module.exports={allblogs,myblogs,editblog,addblog,deleteblog,blogid}