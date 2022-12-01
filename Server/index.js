const express = require('express')
const app = express()
const fs = require("fs");
const path = require('path')

const BodyParser = require('body-parser')
app.use(BodyParser.urlencoded({extended: true}))
app.use(BodyParser.json())

const cors = require ('cors')

app.use(cors({origin: "*"}))

//app.use(express.urlencoded({extended: true}))

const MongoClient = require('mongodb').MongoClient

const User = require('./Routes/User')
const data = require('./Routes/data')
const home = require('./Routes/home')
const video = require('./Routes/video')
const image = require('./Routes/image')
const singleData = require('./Routes/singleData')

app.use('/User', User)
app.use('/data', data)
app.use('/home',home)
app.use('video', video)
app.use('image',image)
app.use('singleData', singleData)

app.listen(8000, ()=>console.log("Listening to port 8000"))









