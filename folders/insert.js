const dbConnect = require('./mongodb');

const insertData = async () => {
    const db = await dbConnect();

    const result = await db.insert(
        [
            { name: 'amit' },
            { name: 'ronak' },
            { name: 'arshnoor' },
            { name: 'ravi' },
            { name: 'manvi' },
        ]
    )
    console.log(result);
}

insertData();