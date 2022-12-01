const express = require('express');
const router = express.Router();

router.get('/add-Product', (req,res,next)=>{
    res.send(`<form action="/admin/add-Product" method="POST"><input type="text" name="title"><br><br><input type="number" name="Price"><br><br><button type="submit">Add Product</button></form>`)
})

router.post('/add-Product', (req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop')
})


module.exports = router;