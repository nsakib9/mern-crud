const express = require('express')
const app = express()
const dbfile = require('./conn')

app.get('/', (req, res)=>{
    res.end('Hello World with node js')
})

app.listen(5000, function(){
    console.log('Node Js and Express Server Started Successfully auto start')
})


