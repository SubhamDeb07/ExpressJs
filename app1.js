const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-Product', (req,res,next)=>{
    res.send(`<form action="/product" method="POST"><input type="text" name="title"><br><br><input type="number" name="Price"><br><br><button type="submit">Add Product</button></form>`)
})

app.post('/product', (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/', (req,res,next)=>{
    res.send(`<h1>Hello From ExpressJS!</h1>`)
})


app.listen(3000);
