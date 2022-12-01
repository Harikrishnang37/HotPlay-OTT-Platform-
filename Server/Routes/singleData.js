const express = require('express')
const router = express.Router()

//For Movie Description Page
router.get('movies/:id', (req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/harikris")

    async function run() {
    try {
    const database = client.db('harikris');
    const movies = database.collection('MovieData');
    
    const movie = await movies.findOne({id: req.params.id});
    
    res.json(movie);

    } finally {
    await client.close();
    }
    }

run()
})

//For Series Description page
router.get('Series/:id/:season/:ep', (req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/harikris")

    async function run() {
    try {
    const database = client.db('harikris');
    const movies = database.collection('SeriesData');
    
    const movie = await movies.findOne({id: req.params.id , season: req.params.season , ep: req.params.ep});
    
    res.json(movie);

    } finally {
    await client.close();   
    }
}

run()
})

module.exports = router