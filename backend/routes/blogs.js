const { allblogs, addblog, deleteblog, editblog, myblogs, blogid } = require("../controllers/blogController");
const fetchuser = require("../middleware/fetchuser");
const blog = require("../modals/Blog")
const router = require("express").Router();

router.get("/allblogs",allblogs);
router.post("/addblog",fetchuser,async (req,res)=>{
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
        console.log(error);
     return res.status(400).json({message:"Encountered error"})
    }
 });
router.delete("/deleteblog",fetchuser,deleteblog);
router.put("/editblog",fetchuser,editblog);
router.get("/myblogs",fetchuser,myblogs);
router.get("/blogbyid",blogid)



module.exports = router