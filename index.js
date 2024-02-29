const express = require('express')
const app = express()
const port = 3000

const products = [
  {
    id:1,
    name:"Master Race",
    price: 25000,
    images: "images/product-1.jpg",
    stock: 5,
  },
  {
    id:2,
    name:"Play Station 5",
    price: 11000,
    images: "images/product-2.jpg",
    stock: 5,
  },
  {
    id:3,
    name:"Xbox",
    price: 11000,
    images: "images/product-3.jpg",
    stock: 5,
  },
  {
    id:4,
    name:"Nintendo Swicth Olded",
    price: 11000,
    images: "images/product-4.jpg",
    stock: 5,
  },
  {
    id:5,
    name:"Iphone",
    price: 9000,
    images: "images/product-5.jpg",
    stock: 5,
  },
  {
    id:6,
    name:"Silla Razer",
    price: 25000,
    images: "images/product-6.jpg",
    stock: 5,
  },
];


app.get('/api/products', (req, res) => {
  res.send(products);
})

app.use("/", express.static("fe"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})