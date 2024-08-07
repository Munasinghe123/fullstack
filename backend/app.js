//mongodb+srv://jaya:mern@mern.odf2krb.mongodb.net/

const express= require('express')
const mongoose = require('mongoose')
const router = require('../backend/routes/UserRoutes')

const app = express()
const cors = require("cors")

//middleware

app.use(express.json())
app.use(cors())
app.use("/users",router)

mongoose.connect("mongodb+srv://jaya:mern@mern.odf2krb.mongodb.net/")
    .then(()=>console.log("connected to mongo"))
    .then(()=>{
        app.listen(5000)
    })
    .catch((err)=> console.log((err)))
