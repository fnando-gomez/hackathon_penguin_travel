const express = require ('express')
const router = express.Router()
const request = require('request')
const model = require('../models/models')
const apiKey = 'AIzaSyDqAA2vF3xOOd_Pcy5SD4Du3MBmbUUAsUo'



router.get('/place/:placeName',function(req,res){
    const getDistance = function(origin, destination){
        return `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin}&destinations=${destination}&key=${apiKey}`}

    request(getDistance("ciudad panama",req.params.placeName),function(err,response,body){
        let data = JSON.parse(body)
        res.send(data)
    })
})

router.get('/photo_data/:place', function(req,res){
    const getdataPlace = function(place){
        return `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=photos,formatted_address,name&key=${apiKey}`
    }
    request(getdataPlace(req.params.place), function(error, response, body){
        let placeData = JSON.parse(body).candidates
        let photoRef = placeData.map (r =>{
            return{
                name: r.name,
                reference: r.photos[0].photo_reference,
            }
        })
    
        let link_photoRef = {photo_link:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef[0].reference}&key=${apiKey}`}
        console.log(link_photoRef)
    
        res.send(link_photoRef.photo_link)
    })

})




module.exports = router