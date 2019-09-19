const express = require ('express')
const router = express.Router()
const request = require('request')
const model = require('../models/models')
const distanceKey = 'AIzaSyDqAA2vF3xOOd_Pcy5SD4Du3MBmbUUAsUo'
const getDistance = function(origin, destination){
    return `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin}&destinations=${destination}&key=${distanceKey}`

}
router.post('/place/:origin/:destination',function(req,res){
    request(getDistance(req.params.origin,req.params.destination),function(err,response,body){
        let data = JSON.parse(body)
        res.send(data)
    })
})

module.exports = router