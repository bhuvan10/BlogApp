const express = require("express");
const authRoute = require("./routes/auth");
const blogRoute = require("./routes/blogs")
const db = require("./routes/db");
var cors = require('cors')
const multer = require("multer");
const path = require("path");
 
db.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});
const app = express()
app.use(cors())
app.use(express.json())

app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});




app.use("/auth", authRoute);
app.use("/blog",blogRoute)
app.listen("5000", () => {
  console.log("Server is running!");
});
