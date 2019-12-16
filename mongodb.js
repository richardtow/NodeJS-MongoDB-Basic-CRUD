// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString())
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {       // current Server Discovery and Monitoring engine is deprecated
MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    //console.log('Connect correctly!')

    const db = client.db(databaseName)      // return database reference
   
/*    
    // insertOne
    db.collection('users').insertOne({
        _id: id,
        name: 'Vikrm',
        age: 27
    }, (error, result) => {
        if (error) {
            return console.log('Unable to to insert... ' + error)
        }

        console.log(result.ops)
    })
    // db.collection('users').insertOne({
    //     name: 'John',
    //     age: 25
    // })
*/
/*
    // insertMany
    db.collection('tasks').insertMany([
        {
            description: "Eat lunch",
            completed: true
        }, {
            description: "Finish this course",
            completed: false
        }, {
            description: "Eat dinner",
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to to insert... ' + error)
        }

        console.log(result)
    })
*/    
/*
    // findOne
    db.collection('tasks').findOne({ _id: new ObjectID("5df2d53679d9a20770e2d50e") }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch from mongoDB')
        }

        console.log(task)
    })

    // find
    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to fetch from mongoDB')
        }

        console.log('--------------------------')
        console.log(tasks)
    })
*/    
/*
    // undateMany
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true    
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
*/

    // deleteOne
    db.collection('tasks').deleteOne({
        description: 'Eat lunch'    
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})