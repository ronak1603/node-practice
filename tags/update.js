const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();

    let result = data.updateOne(
        { name: 'books' },
        {

            $set: { name: 'trains' }

        }
    )
}

updateData();