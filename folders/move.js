const dbConnect = require('./mongodb');

const moveData = async () => {
    let data = await dbConnect();

    let result = data.updateOne(
        { name: 'ronak' },
        {

            $set: { name: 'arshnoor' }

        }
    )
}

moveData();