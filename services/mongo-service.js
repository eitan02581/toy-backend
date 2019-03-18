var dbConn = null;
const dbName = 'toys'
function connectToMongo() {
    // Reuse existing connection if exist
    if (dbConn) return Promise.resolve(dbConn);
    const MongoClient = require('mongodb').MongoClient;

    // const url = (!process.env.PORT) ?
    //     'mongodb://localhost:27017/toys' : 'mlab url'

    const url = 'mongodb+srv://eitan02581:jbhbjnhtX1@cluster0-jgozr.mongodb.net/test?retryWrites=true'
    const client = new MongoClient(url, { useNewUrlParser: true });

    return new Promise((res, rej) => {
        client.connect(err => {
            if (err) rej(err)
            console.log('connected to MONGO YAY')
            dbConn = client.db(dbName)
            res(dbConn)
        });
    })


}

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://eitan02581:<password>@cluster0-jgozr.mongodb.net/test?retryWrites=true";


module.exports = {
    connect: connectToMongo
}
