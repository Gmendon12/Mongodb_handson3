const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017", ()=>{
    console.log("connected")
}, e => console.log(e))

// schema, model and Query

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName : String,
    salary : String,
    department : String,
    lastCompany : String,
    lastSalary : String,
    overallExp : String,
    contactInfo: String,
    yearGrad : String,
    gradStream : String
})

var empl = mongoose.model("Employees", UserSchema )

async function main(){
  const user = new empl({
  firstName: "John",
  lastName: "Doe",
  salary: "25000",
  department: "HR",
  lastCompany: "X",
  lastSalary: "10000",
  overallExp: "2",
  contactInfo: "1234567890",
  yearGrad: "2016",
  gradStream: "CSE"
    })
    console.log(user)

    user.save()

  empl.insertMany([
    {
  
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
       
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },{
        
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        
        "firstName": "Jame",
        "lastName": "roh",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      },{
        
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },{
        
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
       
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      },{
       
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },{
       
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      }
  ])

  //Query the collection and list the employees
  let employees = await empl.find().exec()
  console.log(employees);

  //Query the collection and list of employees with salary more than 15000
  let salary = await empl.find({salary : {$gt:"15000"}}).exec()
  console.log(salary)

  //Query the collection and list the employees having experience more than 1 year
  let exp = await empl.find({overallExp: {$gt:1}}).exec()
  console.log(exp);

  //Query the collection and list the employees who graduated after 2015 and have experience more than 1 year
  let grad = await empl.find({$and : [{yearGrad:{$gt:"2015"}},{overallExp:{$gt:'1'}}]})
  console.log(grad)

  //Query the collection and update the salary of the employees whose salary is greater than 70000 to 65000
  let update = await empl.updateMany({salary:{$gt:'70000'}},{$set:{salary:'65000'}})

  //Delete all documents from the collection where last company is Y
  let deleteDoc  = await empl.deleteMany({lastCompany:"Y"})
  console.log(deleteDoc);

}

main()
