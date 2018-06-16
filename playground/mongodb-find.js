const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5b01faf5de50a18ad5418a76")
    // }).toArray().then( (documents)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(documents, undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then( (count)=> {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'Joris Hart'
    }).toArray().then( (users)=> {
        console.log('Users');
        console.log(JSON.stringify(users, undefined,2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    //client.close();
});