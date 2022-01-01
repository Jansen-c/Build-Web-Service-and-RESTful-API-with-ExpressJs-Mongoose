const mongoose = require("mongoose")
const dotenv = require("dotenv")

async function openDBConnection(uri){
    return mongoose.connect(uri, { useNewUrlParser: true })
}

module.exports = openDBConnection