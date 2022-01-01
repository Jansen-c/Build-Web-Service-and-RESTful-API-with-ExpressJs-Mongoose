const mogoose = require("mongoose")

const courses = new mogoose.Schema({
    title: {
        type: String,
        required: true,
        min: 1,
        max: 50,
    },
    description: {
        type: String,
        required: true,
        min: 1,
        max: 500,
    },
    instructor: { //sumber: https://stackoverflow.com/questions/29078753/how-to-reference-another-schema-in-my-mongoose-schema/29079951
        type: String,
        required: true,
        ref: 'Instructors', //referensi ke schema Instructors
    },
    scheduleDateTime: {
        type: Date,
        required: true,
        
    }
}, {
    timestamps: true,
    versionKey : false,
})

const Courses = mogoose.model("courses", courses)
module.exports = Courses