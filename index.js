const express = require('express')
const app = express()
const query = require('./conn')
const cors = require("cors")
const port = 5000

const products = [
    {id:1,name:"lap",qty:11,price:1500},
    {id:2,name:"dell",qty:16,price:14000},
    {id:3,name:"lenovo",qty:14,price:41000},
    {id:4,name:"mac",qty:10,price:42000},
    {id:5,name:"hp",qty:2,price:44000},
    {id:6,name:"sam",qty:12,price:47000},
]
app.use = (express.json())
app.use = cors()

app.get("/products",(req,res)=>{
    res.json(products)
});

app.post("/addproduct",(req,res)=>{
    products.push(req.body)
    console.log(req.body)
    res.json({message:"add product sucssefuly"})
});

app.delete("/deleteproduct",(req,res)=>{
    let index = products.findIndex((ele) => ele.id == req.body.id);
    if(index < 0){
        res.json({message: "Product not found"})
    }else{
        products.splice(index,1)
        res.json({message:"deleted"})
    }
})

app.put("/updateproduct",(req,res)=>{
    const {id, name, qty, price} = req.body
    let index = products.findIndex((ele)=> ele.id == req.body.id);
    if(index < 0){
        res.json({message: "Product not found"})
    }else{
        products[index].name = name;
        products[index].qty = qty;
        products[index].price = price;
        res.json({message:"updated"})
    }
})






app.listen(port, ()=>{
    console.log(`server is running well on port ${port}`)
});













