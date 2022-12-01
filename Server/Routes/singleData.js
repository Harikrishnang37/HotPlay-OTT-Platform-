const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient

//For Movie Description Page
router.get('/movies/:id', (req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/Play4H")

    async function run() {
    try {
    const database = client.db('Play4H');
    const movies = database.collection('Movies');
    
    //console.log(req.params.id)

    const movie = await movies.findOne({id: parseInt(req.params.id)});
    
    res.json(movie);
    //console.log(movie)

    } finally {
    await client.close();
    }
    }

run()
})

//For Series Description page
router.get('/Series/:id/:season/:episode', (req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/Play4H")

    async function run() {
    try {
    const database = client.db('Play4H');
    const movies = database.collection('Series');
    
    const movie = await movies.findOne({id: parseInt(req.params.id) , season: parseInt(req.params.season) , episode: parseInt(req.params.episode)});
    
    res.json(movie);

    } finally {
    await client.close();   
    }
}

run()
})

module.exports = router