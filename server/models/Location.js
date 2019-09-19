const mongoose = require('mongoose')
const Schema = mongoose.Schema



const locationSchema = new Schema({
    name: String,
    distance: Number,
    pics: [{type: Schema.Types.ObjectId, ref:"pic"}],
    visitors: [{type: Schema.Types.ObjectId, ref: "user"}]
    //optional "region" and "country" properties
})

const Location = mongoose.model("location",locationSchema)



module.exports = Location