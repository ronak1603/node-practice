const express = require('express');

const dbConnect = require('./mongodb');

// const bcrypt = require('bcrypt');

const mongodb = require('mongodb');

const app = express();

// const {addUserValidation} = require("./validations/validation");


app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();

    data = await data.find().toArray();

    res.send(data);
});

app.get('/:name', async (req, res) => {
    let data = await dbConnect();

    let result = await data.find({ name: req.params.name }).toArray();

    res.send(result);
})

app.post('/',  async (req, res) => {
    let data = await dbConnect();

    let result = await data.insert(req.body)

    res.send(result);
});

app.put('/:id',  async (req, res) => {
    let data = await dbConnect();
    
     let result = await data.updateOne(
         {  _id : new mongodb.ObjectId(req.params.id) },
         {
             $set: req.body
         }
     )
     
     res.send({ status: "updated" });

});

app.delete('/:id', async (req, res) => {
    let data = await dbConnect();

    let result = await data.deleteOne(
        { _id : new mongodb.ObjectId(req.params.id) }
    )

    res.send(result);
});

app.listen(3000);