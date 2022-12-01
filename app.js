const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log('a')
    next()
})

app.use((req,res,next)=>{
    console.log('b')
    res.send({ key1: value })
})


app.listen(3000);
