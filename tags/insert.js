const dbConnect = require('./mongodb');

const insertData = async () => {
    const db = await dbConnect();

    const result = await db.insert(
        [
            { name: 'animals' },
            { name: 'books' },
            { name: 'movies' },
        ]
    )
    console.log(result);
}

insertData();