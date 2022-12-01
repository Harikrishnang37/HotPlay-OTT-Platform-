const express = require('express')
const router = express.Router()


//sends back path of image required. --- Called by sliders or VideoDescriptionPage
router.get('/movie/:id',(req,res)=>{
    res.sendFile(path.join(__dirname, `/Pictures/Movies/${req.params.id}.jpg`))
})

//sends back path of image required. --- Called by sliders or VideoDescriptionPage
router.get('/series/:id',(req,res)=>{
    res.sendFile(path.join(__dirname, `/Pictures/Series/${req.params.id}.jpg`))
})

module.exports = router