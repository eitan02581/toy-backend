// const mongoService = require('./mongo-service')
const mongoService = require('./updated-mongo-service')

// const ObjectId = require('mongodb').ObjectId;
const ObjectId = require('mongodb').ObjectId;


function query(filterBy) {
    if (filterBy) {
        var queryToMongo = {}
        if (filterBy.name) queryToMongo.name = new RegExp(filterBy.name, 'i');
        if (filterBy.type) {
            // TODO: HOW TO USE $OR , FOR FILTERING ADULT AND FUNNY TYPES
            if (filterBy.type.split(',').length > 1) filterBy.type = filterBy.type.split(',')
            queryToMongo.type = filterBy.type
        }
        if (filterBy.inStock) queryToMongo.inStock = (filterBy.inStock) !== 'All' ? JSON.parse(filterBy.inStock) : 'All'
        var sort = (filterBy.sortBy === 'name') ? { name: 1 } : { price: 1 }

        console.log('fff', queryToMongo);
        return mongoService.connect()
            .then(db => db.collection('toys').find(queryToMongo).sort(sort).toArray())
    }
    return mongoService.connect()
        .then(db => db.collection('toys').find({}).sort().toArray())
}

// TODO: FIX IT 
function add(toy) {
    return mongoService.connect()
        .then(db => db.collection('toys').insertOne(toy))
        .then(res => {
            toy._id = res.insertedId
            return toy
        })
}

// var toys = [{
//     "_id": ObjectId("5c890cc81873b3c6c5bd73e5"),
//     "name": "tincidunt non",
//     "price": 50.0,
//     "type": "Educational",
//     "createdAt": "1972-04-15T12:45:16.881Z",
//     "inStock": true
// }, {
//     "_id": ObjectId("5c890cc81873b3c6c5bd73e6"),
//     "name": "morbi tincidunt",
//     "price": 18.0,
//     "type": "Adult",
//     "createdAt": "1976-06-01T14:55:50.648Z",
//     "inStock": false
// }, {
//     "_id": ObjectId("5c890cc81873b3c6c5bd73e7"),
//     "name": "porta egestas",
//     "price": 36.0,
//     "type": "Adult",
//     "createdAt": "1980-03-10T14:54:28.621Z",
//     "inStock": true
// }, {
//     "_id": ObjectId("5c890cc81873b3c6c5bd73e8"),
//     "name": "aliquam donec",
//     "price": 88.0,
//     "type": "Funny",
//     "createdAt": "1972-12-18T22:44:06.366Z",
//     "inStock": true
// }, {
//     "_id": ObjectId("5c890cc81873b3c6c5bd73eb"),
//     "name": "odil1",
//     "price": 1,
//     "type": "Educational",
//     "createdAt": "1975-06-19T21:26:10.015Z",
//     "inStock": true
// }, {
//     "_id": ObjectId("5c890cc81873b3c6c5bd73ec"),
//     "name": "sit pretium",
//     "price": 2.0,
//     "type": "Adult",
//     "createdAt": "1973-05-14T14:36:15.401Z",
//     "inStock": true
// }, {
//     "_id": ObjectId("5c890cc81873b3c6c5bd73ee"),
//     "name": "tortor vel",
//     "price": 8,
//     "type": "Adult",
//     "createdAt": "1981-02-24T15:39:55.870Z",
//     "inStock": false
// }, {
//     "_id": ObjectId("5c8917864de1544cc8d8e895"),
//     "name": "dollar Eitan",
//     "price": 100,
//     "type": "Adult",
//     "createdAt": "2007-10-14T17:10:45.219Z",
//     "inStock": false
// }, {
//     "_id": ObjectId("5c8d1c04e0107d4ad4bc624c"),
//     "name": "EITAN",
//     "price": "123",
//     "type": "Adult",
//     "inStock": "true",
//     "createdAt": 1552751620058.0
// }, {
//     "_id": ObjectId("5c8d1c81e0107d4ad4bc624d"),
//     "name": "avi",
//     "price": "111",
//     "type": "Funny",
//     "inStock": "true",
//     "createdAt": 1552751745136.0
// }]

// function addMany(toys) {
//     return mongoService.connect()
//         .then(db => db.collection('toys').insert(toys))
//         .then(res => {
//             toy._id = res.insertedId
//             return toy
//         })
// }

// addMany(toys)

// function getById(id) {
//     const _id = new ObjectId(id)
//     console.log(_id)
//     return mongoService.connect()
//         .then(db => db.collection('toys').findOne({ _id }))
//         .then(toy => {
//             console.log('didi gew it?', toy)
//             return toy
//         })
// }
function getById(id) {
    const _id = new ObjectId(id)
    return mongoService.connect()
        .then(db => db.collection('toys').findOne({ _id }))
        .then(toy => {

            return toy
        })
}


function remove(toyId) {
    const _id = new ObjectId(toyId)
    return mongoService.connect()
        .then(db => db.collection('toys').deleteOne({ _id }))
}

function update(toy) {
    toy._id = new ObjectId(toy._id)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('toys');
            return collection.updateOne({ _id: toy._id }, { $set: toy })
                .then(result => {
                    return toy;
                })
        })
}
module.exports = {
    add, query, getById, remove, update
}