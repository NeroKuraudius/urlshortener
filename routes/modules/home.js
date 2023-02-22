// 首頁路由

const express = require('express')
const router = express.Router()


// 首頁渲染
router.get('/', (req, res) => {
  res.render('index')
})


module.exports = router