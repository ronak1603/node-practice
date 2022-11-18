const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();

    let result = await data.deleteOne(
        { name: 'ravi' }
    )

    console.warn(result)
}

deleteData();