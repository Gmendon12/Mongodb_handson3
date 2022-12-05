const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
const url = "mongodb+srv://gmendon:<1234>@cluster0.ifqlzwl.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(url)
console.log("client created")

async function main(){
    await client.connect()
    console.log("client connected");

    const database = client.db('Cluster0')
    const collection = database.collection("sample_airbnb.listingsAndReviews")

    const data = await collection.find().toArray()
    console.log(data);
    // const insert = await collection.insertOne({
    //     firstName : "Gautam",
    //     lastName : "Mendon"
    // })

    // const find = await collection.find({
    //     first : "Christopher"
    // })
    // console.log(find)

    // console.log(insert)
}

main()