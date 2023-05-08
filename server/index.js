const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 9000


// middleware 
app.use(cors())
app.use(express.json())
const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD_NAME}@cluster0.tdolxqi.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

    async function run() {
        try {
            await client.connect();
            // icons 
            console.log('database is running...')
                const database = client.db("coffee");
                const iconCollection = database.collection("icon");
                const coffeeCollection = database.collection("coffee");

            app.post('/icons',async(req,res)=>{
                const information = req.body 
                const result = await iconCollection.insertOne(information)
                res.send(result)
            })
            app.get('/icons',async(req,res)=>{
                const cursor = iconCollection.find({})
                const result = await cursor.toArray()
                res.send(result)
            })
            // add new coffee 
            app.post('/coffee',async(req,res)=>{
                const information = req.body 
                const result = await coffeeCollection.insertOne(information)
                res.send(result)
            })
            app.get('/coffee',async(req,res)=>{
                const cursor = coffeeCollection.find({})
                const result = await cursor.toArray()
                res.send(result)
            })

        } finally {

        }
    }
    run().catch(console.dir);


    app.get('/',(req,res)=>{
        res.send('server is runnning .....')
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })