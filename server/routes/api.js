const express = require ('express')
const router = express.Router()
const request = require('request')
const Location = require('../models/Location')
const Pic = require('../models/Pic')
const Trip = require('../models/Trip')
const User = require('../models/User')
const apiKey = 'AIzaSyDqAA2vF3xOOd_Pcy5SD4Du3MBmbUUAsUo'
//https://maps.googleapis.com/maps/api/geocode/json?latlng=${{lat,lng}}&key=AIzaSyDqAA2vF3xOOd_Pcy5SD4Du3MBmbUUAsUo



router.get('/place/:placeName',function(req,res){
    const getDistance = function(origin, destination){
        return `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin}&destinations=${destination}&key=${apiKey}`}

    request(getDistance("ciudad panama",req.params.placeName),function(err,response,body){
        let data = JSON.parse(body)
        res.send(data)
    })
})

router.get('/location/:place', function(req,res){
    const getDataPlace = function(place){
        return `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${apiKey}`
    }
    request(getDataPlace(req.params.place), function(error, response, body){
        let placeData = JSON.parse(body).candidates
        let locale = {
            name: placeData[0].formatted_address, 
            ref: placeData[0].photos[0].photo_reference,
            lat: placeData[0].geometry.location.lat,
            lng: placeData[0].geometry.location.lng
        }
        locale.ref = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${locale.ref}&key=${apiKey}`
        res.send(locale)
        // res.send({link_photoRef, name})
    })

})
router.get(`/users`,function(req,res){
    User.find({}).exec((err,data)=>{
        res.send(data)
    })
})
router.post('/newUser',function(req,res){
    console.log(req.body)
    let user = new User(req.body)
    console.log(user)
    let validator = User.findOne({firstName: user.name})
    if(!validator){
        User.save()
    }
    res.end()
})
router.get(`/coords/:latlng`,(req,res)=>{
    const getPlace = function(latlng){
        return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=AIzaSyDqAA2vF3xOOd_Pcy5SD4Du3MBmbUUAsUo`
    }
    request(getPlace(req.params.latlng),function(err,response,body){
        let data = JSON.parse(body)
        let relevant = {
            name:"",

        }
        res.send(data)
    })

})




module.exports = router