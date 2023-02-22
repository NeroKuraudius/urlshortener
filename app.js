const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const routes = require('./routes')

// 設定環境變數
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// 連結資料庫
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

//設定固定樣板 ※exphbs.engine()
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Succeed in running on localhost:${PORT}`)
})