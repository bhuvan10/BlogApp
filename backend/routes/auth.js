const { signup, signin } = require("../controllers/userController");
const fetchuser = require("../middleware/fetchuser");

const router = require("express").Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.get("/getuser",fetchuser,(req,res)=>{
    return res.status(200).json(req.user)
})

module.exports = router