const express = require("express")
const expressLayouts = require('express-ejs-layouts')

const app = express()
app.use(express.static('public'))
app.use(expressLayouts)
app.set('view engine', 'ejs');

const PORT = 4000

app.get("/status", function(req, res) {
  res.json({
    status: "OK"
  })
})


const products = [
  {
    id: 1,
    name: "Kitchen Towel",
    price: 112.5
  },
  {
    id: 2,
    name: "Paper Towel",
    price: 60
  },
  {
    id: 3,
    name: "Spoon Set",
    price: 320.5
  }
]

app.get("/products", function(req, res) {
  res.render('products', { products: products });
})

app.get("/products/:id", function(req, res) {
  const productId = parseInt(req.params.id)

  res.render('product', { product: products[productId-1] });
})

app.listen(PORT, function() {
  console.log(`Server listening at http://localhost:${PORT}`)
})

