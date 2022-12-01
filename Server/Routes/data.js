const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient



// For big slider in Movie page
router.get('/movies/featured',(req,res)=>{
  const client= new MongoClient("mongodb://127.0.0.1:27017/Play4H")

  async function run() {
  try {
    const database = client.db('Play4H');
    const movies = database.collection('Movies');
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
router.get('/series/featured',(req,res)=>{
  const client= new MongoClient("mongodb://127.0.0.1:27017/Play4H")

  async function run() {
  try {
    const database = client.db('Play4H');
    const movies = database.collection('Series');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Back to the Future' };
    const movie = await movies.find({season: 1, episode: 1}).toArray();
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
router.get('/movies/:genre',(req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/Play4H")

  async function run() {
    try {
      const database = client.db('Play4H');
      const movies = database.collection('Movies');
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
  router.get('/series/:genre',(req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/Play4H")

  async function run() {
  try {
    const database = client.db('Play4H');
    const movies = database.collection('Series');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Back to the Future' };
    const movie = await movies.find({season: 1, episode: 1}).toArray();
    //console.log(movie)
    //console.log(req.body)
    res.send(movie);
    console.log(movie)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  }

run()
//res.send("ftgf")
})

module.exports = router


//For EpisodeInfo
router.get('/series/:id/:season',(req,res)=>{
  const client= new MongoClient("mongodb://127.0.0.1:27017/Play4H")

async function run() {
try {
  const database = client.db('Play4H');
  const movies = database.collection('Series');
  // Query for a movie that has the title 'Back to the Future'
  //const query = { title: 'Back to the Future' };
  const movie = await movies.find({season: parseInt(req.params.season), id: parseInt(req.params.id)}).toArray();
  console.log(movie)
  //console.log(req.body)
  res.send(movie);
  //console.log(movie)
} finally {
  // Ensures that the client will close when you finish/error
  await client.close();
}
}

run()
//res.send("ftgf")
})

module.exports = router