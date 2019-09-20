const mongoose = require('mongoose')
const Schema = mongoose.Schema



const locationSchema = new Schema({
    name: String,
    distance: Number,
    latitude: Number,
    longitude: Number,
    cityAddress: String,
    city: String,
    country: String,
    pics: [{type: Schema.Types.ObjectId, ref:"pic"}],
    visitors: [{type: Schema.Types.ObjectId, ref: "user"}]

})

const Location = mongoose.model("location",locationSchema)

module.exports = Location