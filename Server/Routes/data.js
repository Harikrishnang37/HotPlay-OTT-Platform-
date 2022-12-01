const express = require('express')
const router = express.Router()



// For big slider in Movie page
router.get('movie/featured',(req,res)=>{
  const client= new MongoClient("mongodb://127.0.0.1:27017/harikris")

  async function run() {
  try {
    const database = client.db('harikris');
    const movies = database.collection('MovieData');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Back to the Future' };
    const movie = await movies.find({category: "featured"}).toArray();
    //console.log(movie)
    //console.log(req.body)
    res.send(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  }

run()
//res.send("ftgf")
})

//For big slider in Series Page
router.get('series/featured',(req,res)=>{
  const client= new MongoClient("mongodb://127.0.0.1:27017/harikris")

  async function run() {
  try {
    const database = client.db('harikris');
    const movies = database.collection('SeriesData');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Back to the Future' };
    const movie = await movies.find({season: 1, ep: 1}).toArray();
    //console.log(movie)
    //console.log(req.body)
    res.send(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  }

run()
//res.send("ftgf")
})

//For Small Slider in movie page
router.get('movie/:genre',(req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/harikris")

  async function run() {
    try {
      const database = client.db('harikris');
      const movies = database.collection('MovieData');
      // Query for a movie that has the title 'Back to the Future'
      //const query = { title: 'Back to the Future' };
      const movie = await movies.find({language: req.params.genre}).toArray();
      //console.log(movie)
      //console.log(req.body)
      res.send(movie);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

run()
//res.send("ftgf")
})

//For small slider in series page
  router.get('series/:genre',(req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/harikris")

  async function run() {
  try {
    const database = client.db('harikris');
    const movies = database.collection('MovieData');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Back to the Future' };
    const movie = await movies.find({season: 1, ep: 1}).toArray();
    //console.log(movie)
    //console.log(req.body)
    res.send(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  }

run()
//res.send("ftgf")
})

module.exports = router