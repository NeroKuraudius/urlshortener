const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
require('./config/mongoose')


const PORT = 3000
const app = express()

//設定固定樣板 ※exphbs.engine()
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 設定body-parser
app.use(express.urlencoded({ extended: true }))

// 設定總路由
app.use(routes)

app.listen(PORT, () => {
  console.log(`Succeed in running on localhost:${PORT}`)
})