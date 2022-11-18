const express = require('express');

const dbConnect = require('../mongodb');

const bcrypt = require('bcrypt');

const app = express();

const {addUserValidation} = require("./validations/validation");


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

app.post('/',addUserValidation,  async (req, res) => {
    let data = await dbConnect();

    const salt = await bcrypt.genSalt(10);

    const secPass = await bcrypt.hash(req.body.password, salt);

    let result = await data.insert({name:req.body.name,email:req.body.email,password:secPass,number:req.body.number})

    res.send(result);
});

app.put('/:name', addUserValidation, async (req, res) => {
    let data = await dbConnect();
    
     let result = await data.updateOne(
         { name: req.params.name },
         {
             $set: req.body
         }
     )
     
     res.send({ status: "updated" });

});

app.delete('/:name', async (req, res) => {
    let data = await dbConnect();

    let result = await data.deleteOne(
        { name: req.params.name }
    )

    res.send(result);
});

app.listen(3000);