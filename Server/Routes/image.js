const express = require('express')
const router = express.Router()
const path = require('path')


//sends back path of image required. --- Called by sliders or VideoDescriptionPage
router.get('/movies/:id',(req,res)=>{
    res.sendFile(path.join(__dirname, `../Pictures/Movies/${req.params.id}.jpg`))
    //res.sendFile(`C:/Users/Harikrishnan G/Other/Assignments/WT/WebTech_Project/HotPlay-OTT-Platform-/Server/Pictures/Movies/${req.params.id}.jpg`)
})

//sends back path of image required. --- Called by sliders or VideoDescriptionPage
router.get('/series/:id',(req,res)=>{
    res.sendFile(path.join(__dirname, `../Pictures/Series/${req.params.id}.jpg`))
})

module.exports = router