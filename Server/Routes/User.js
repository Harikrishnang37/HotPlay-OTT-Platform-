const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient

//SignUp
router.post('/signup',(req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/Play4H")
  
  async function run() {
  try {
    const database = client.db('Play4H');
    const movies = database.collection('User');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Back to the Future' };
  
    const movie = await movies.findOne({name:req.body.name});
    if(movie === null)
    {
      const result = await movies.insertOne({name:req.body.name ,password:req.body.password});
      //console.log("something")
      //console.log("inserted")
      res.send("true")
    }
    else{
      res.send("false")
    }
  
  
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  }
  
  run()
  //res.send("ftgf")
  })

//Login 
router.post('/login',(req,res)=>{
    const client= new MongoClient("mongodb://127.0.0.1:27017/Play4H")

async function run() {
  try {
    const database = client.db('Play4H');
    const movies = database.collection('User');
    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Back to the Future' };
    const movie = await movies.findOne({name:req.body.name ,password:req.body.password});
    //console.log("something")
    //console.log(req.body)
    res.json(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run()
//res.send("ftgf")
})

module.exports = router