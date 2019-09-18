const express = require ('express')
const router = express.Router()
const request = require('request')
const model = require('../models/models')
const apiKey = 'AIzaSyDqAA2vF3xOOd_Pcy5SD4Du3MBmbUUAsUo'

const getDistance = function(origin, destination){
    return `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin}&destinations=${destination}&key=${apiKey}`
    }

router.get('/place/:placeName',function(req,res){
    request(getDistance("ciudad panama",req.params.placeName),function(err,response,body){
        let data = JSON.parse(body)
        res.send(data)
    })
})

router.get('/photo_data/:city', function(req,res){
    let place = req.params.city
    let apiFindPlace = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=photos,formatted_address,name&key=${apiKey}`
                        
    request(apiFindPlace, function(error, response, body){
        let placeData = JSON.parse(body).candidates
        let photoRef = placeData.map (r =>{
            return{
                name: r.name
            }
        } )

    console.log(place)    
    res.send(photoRef)//Inside the request
    })

})




module.exports = router