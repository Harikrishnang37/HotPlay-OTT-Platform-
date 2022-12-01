const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient

  //Fetching data for homepage --- Accessed by smallslider and bigslider in Home page.
  router.get('/:type',(req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/Play4H")
    //console.log(client)

    async function run() {
        try {
            const database = client.db('Play4H');
            const movies = database.collection('Movies');
            //console.log(database)
            // Query for a movie that has the title 'Back to the Future'
            //const query = { title: 'Back to the Future' };
            //console.log(req.params.type)
            const movie = await movies.find({category: req.params.type}).toArray();
            //console.log(movie)
            //console.log(req.body)
            
            res.send(movie);
        } 
        finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }

run()
//res.send("ftgf")
})


module.exports = router