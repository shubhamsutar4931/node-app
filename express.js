const express=require('express');
const mongoose = require("mongoose");
const app= express();

// To parse the request bodies
app.use(express.json());

console.log(`===== Mongo DB connection =====`);
// mongodb://localhost:27017/user_database
 
async function mongoConnection() {
    try {
        await mongoose.connect("mongodb://localhost:27017/user_database");
        console.log("====== Connection successfully ==========");   
    } catch (error) {
        console.log(error);
    }
}
mongoConnection();
 
// Defining Schema for Student
const schemaStudent = new mongoose.Schema({
    name: { type: String },
    college: { type:String },
    marks: { type: Number},
    city:{type:String}
},
{ collection: "student_collection"}
);

// Creating the Model for Schema: schemaStudent
const Student = mongoose.model('Student', schemaStudent);

//To retrieve or fetch the data
app.get("/students", async (request, response)=>{
    const allStudents = await Student.find({});
    response.status(200)
    .json({
        allStudents
    });
} );

// To create the resource
app.post("/create", (request, response)=>{
    const {name, college, marks,city} = request.body;
     Student.create({
         name:name,
         college:college,
         marks:marks,
         city:city
     });
     response.send(`Successfully created Student `);
 } );

// To update the resource

app.put("/update", async (request, response)=>{
    const {name, college, marks,city} = request.body;
    const studentDocument = await Student.findOneAndUpdate(
        { marks: marks}, // Find the students by marks = 70
        { name: name, college: college,city:city }, // Update the fields
        { new: true, upsert: true}
    )
    response.status(200).json(studentDocument);
} );
 
// To delete the resource using particular field 
// http://localhost:8080/delete/555
app.delete("/delete/:mrk", async (request, response)=>{
    const mrk = request.params.mrk;
    const deletedStudent = await Student.findOneAndDelete({marks:mrk})
    if(!deletedStudent) {
        return response.status(404).json({ 
            "status": 404,
            "message":  `Not Found, Student with marks: ${mrk}`})
    }
   return response.status(200).json(deletedStudent);
} );

app.listen(8080,()=>
{
    console.log(`Server started on port 8080`); 
});