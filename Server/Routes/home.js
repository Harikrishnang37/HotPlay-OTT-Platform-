const express = require('express')
const router = express.Router()

  //Fetching data for homepage --- Accessed by smallslider and bigslider in Home page.
  router.get('/:type',(req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/harikris")

    async function run() {
        try {
            const database = client.db('harikris');
            const movies = database.collection('MovieData');
            // Query for a movie that has the title 'Back to the Future'
            //const query = { title: 'Back to the Future' };
            const movie = await movies.find({Category: req.params.type}).toArray();
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