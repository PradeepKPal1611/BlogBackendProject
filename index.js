const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/BLOG");

const express = require("express");
const app = express();

const isBlog = require("./middlewares/isBlog");

app.use(isBlog.isBlog);

// app.get('/', function(req,res){
//     res.send('Hello Guys!!!');
// });

// For Admin Routes
const adminRoute = require("./routes/adminRoute");
app.use('/', adminRoute);

// For User Routes
const userRoute = require("./routes/UserRoute");
app.use('/', userRoute);

// For Blog Routes
const blogRoute = require("./routes/blogRoute");
app.use('/',blogRoute);

app.listen(3000, function () {
    console.log("Server is running Good");
});