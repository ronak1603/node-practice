const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();

    let result = await data.deleteOne(
        { name: 'apple' }
    )

    console.warn(result)
}

deleteData();