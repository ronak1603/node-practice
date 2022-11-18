const dbConnect = require('./mongodb');

const insertData = async () => {
    const db = await dbConnect();

    const result = await db.insert(
        [
            { name: 'amit', email: 'amit@gluelabs.com', password: 'amit@123', number: '9335349876' },
            { name: 'aryan', email: 'aryan@gluelabs.com', password: 'aryan@123', number: '9535349876' },
            { name: 'anush', email: 'anush@gluelabs.com', password: 'anush@123', number: '9355349876' },
            { name: 'ravi', email: 'ravi@gluelabs.com', password: 'ravi@123', number: '9355649876' },
        ]
    )
    console.log(result);
}

insertData();