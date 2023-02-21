const dbConnect = require('./mongodb');

const insertData = async () => {
    const db = await dbConnect();

    const result = await db.insert(
        [
            { url:"https://en.wikipedia.org/wiki/Apple",name: 'apple' },
            { url:"https://en.wikipedia.org/wiki/Mango",name: 'mango' },
            { url:"https://en.wikipedia.org/wiki/Kiwifruit",name: 'kiwi' },

        ]
    )
    console.log(result);
}

insertData();