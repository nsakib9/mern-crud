const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.end('Hello World with node js')
})

app.listen(5000, function(){
    console.log('Node Js and Express Server Started Successfully auto start')
})


