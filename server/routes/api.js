const express = require ('express')
const router = express.Router()
const request = require('request')
const Location = require('../models/Location')
const Pic = require('../models/Pic')
const Trip = require('../models/Trip')
const User = require('../models/User')
const apiKey = 'AIzaSyDqAA2vF3xOOd_Pcy5SD4Du3MBmbUUAsUo'



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
        return `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=photos,formatted_address,name&key=${apiKey}`
    }
    request(getDataPlace(req.params.place), function(error, response, body){
        let placeData = JSON.parse(body).candidates
        let locale = {name: placeData[0].name, ref: placeData[0].photos[0].photo_reference}
        locale.ref = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${locale.ref}&key=${apiKey}`
        res.send(locale)
        // res.send({link_photoRef, name})
    })

})




module.exports = router