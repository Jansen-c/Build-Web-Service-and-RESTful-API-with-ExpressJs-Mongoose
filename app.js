const express = require("express")
const dotenv = require("dotenv")
dotenv.config() //ini harus buat process.env

const openDBConnection = require("./helpers/db")
const instructors = require("./routers/instructors")
const courses = require("./routers/courses")
const participants = require("./routers/participants")



const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

async function main(){
    try {
        console.log(process.env.MONGO_URI)
        await openDBConnection(uri)
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }));
        app.use(instructors)
        app.use(courses)
        app.use(participants)
    
        app.listen(port, ()=>{
            console.log(`listening at http://localhost:${port}`)
        })
    } catch (error) {
        console.log("main : ",error)
    }
}

main()