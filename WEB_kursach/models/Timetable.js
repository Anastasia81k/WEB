const {Schema, model} = require("mongoose");

const schema = new  Schema({
    day:{type:String},
    lesson:{type:String},
    time:{type:String},
    subject:{type: String},
    teacher:{type:String},
    group:{type:String}
})

module.exports = model("timetables", schema)