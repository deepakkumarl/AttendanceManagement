const express = require("express");
const app = express();
require('dotenv').config();
const cookieparser = require("cookie-parser");
const {connect} = require("./Db/connecting.js")
const signup = require("./routes/signup.route.js")
const classapi = require("./routes/admin.route.js")
const studentsapi = require("./routes/enrolls.route.js")
const getprofiles = require("./routes/users.route.js");
const getattendance = require("./routes/attendance.route.js");

const cors = require("cors");
app.use(cookieparser());
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,                
  }));
app.use(express.json());

app.use("/api/user" , signup);
app.use("/api/class" , classapi);
app.use("/api/students" , studentsapi);
app.use("/api/users" , getprofiles);
app.use("/api/attendance" , getattendance);

const PORT = process.env.PORT;

app.get("/" , (req,res) => {
    res.send("hello");
})

app.listen(PORT , () => {
    console.log("Port is running suceesfully");
    connect();
})