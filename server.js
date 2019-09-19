const express = require ('express')
const bodyParser = require ('body-parser')
const api = require ('./server/routes/api')
const mongoose = require ('mongoose')
const path = require ('path')

const app = express()
const port = 4003

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

mongoose.connect('mongodb://localhost/CitiesDB',{useNewUrlParser:true})

app.use(express.static(path.join(__dirname,'./dist')))
app.use(express.static(path.join(__dirname,'./node_modules')))

app.use('/',api)

app.listen(port,()=>console.log(`running on ${port}`))