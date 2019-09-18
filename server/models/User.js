const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    location: {type:Schema.Types.ObjectId,ref:"location"},
    trips: [{type:Schemama.Types.ObjectId,ref:"trip"}]
})

const User = mongoose.model("user",userSchema)

const locationSchema = new Schema({
    name: String,
    distance: Number,
    pics: [{type: Schema.Types.ObjectId, ref:"pic"}],
    visitors: [{type: Schema.Types.ObjectId, ref: "user"}]
    //optional "region" and "country" properties
})

const Location = mongoose.model("location",locationSchema)

const tripSchema = new Schema({
    start: String,
    end: String,
    pics: [{type: Schema.Types.ObjectId, ref:"pic"}],
    user: {type: Schema.Types.ObjectId, ref:"user"},    
    locations: [{type: Schema.Types.ObjectId, ref:"location"}]
})

const Trip = mongoose.model("trip",locationSchema)

const picSchema = new Schema({
    date: String,
    takenBy: {type: Schema.Types.ObjectId, ref:"user"},
    location: [{type: Schema.Types.ObjectId, ref:"location"}]
    //add actual image
})
//optional DB schemas for "Region" and "Country"

const Pic = mongoose.model("pic",picSchema)
