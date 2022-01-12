const {Schema, model} = require("mongoose");

const schema = new  Schema({
    facultet:{type:String},
    kod:{type:String},
    textKod:{type:String},
    text:{type:String}

})

module.exports = model("speciality", schema)