const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log('a')
    next()
})

app.use((req,res,next)=>{
    console.log('b')
    res.send(`<h1>Welcome to my Expressjs</h1>`)
})


app.listen(3000);
