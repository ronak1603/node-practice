const express = require('express');

const dbConnect = require('./mongodb');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();

    data = await data.find().toArray();

    res.send(data);
});

app.post('/', async (req, res) => {
    let data = await dbConnect();

    let result = await data.insert(req.body);

    res.send(result);
});

app.put('/:name', async (req, res) => {
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