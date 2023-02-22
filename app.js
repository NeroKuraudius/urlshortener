const express = require('express')
const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.once('open', () => {
  console.log('mongodb connected!')
})
db.on('error', () => {
  console.log('mongodb erroe!')
})

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('This is the home page')
})

app.listen(PORT, () => {
  console.log(`Succeed in running on localhost:${PORT}`)
})