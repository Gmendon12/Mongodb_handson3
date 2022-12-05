const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = "mongodb://localhost:27017"

const client = new MongoClient(url)

async function main(){
    await client.connect()

    const database = client.db("Human_Resource")
    const employees = database.collection("employees")
    console.log(employees)

    const find  = await employees.find().toArray()
    console.log(find);

    const query1 = await employees.find({salary : {$gt:"30000"}}).toArray()
    console.log(query1)

    const query2 = await employees.find({overallExp : {$gte : '1'}}).toArray()
    console.log(query2);

    // const query3 = await employees.find({
    //     $and : [{
    //         yearGrad : {$gt : "2016"}
    //     },{ 
    //         overallExp : {$gt : '1'}
    //     }]
    // })

    // const query4 = await employees.updateMany({

    // },{})
}

main()