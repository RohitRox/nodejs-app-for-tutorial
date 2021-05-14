const express = require("express")

const app = express()

const PORT = 4000

app.get("/", function(req, res) {
  res.send('Hello from Express!')
})

app.get("/status", function(req, res) {
  res.send('Status Ok!')
})

app.listen(PORT, function() {
  console.log(`Server listening at http://localhost:${PORT}`)
})

