// 首頁路由

const express = require('express')
const router = express.Router()
const Url = require('../../models/urlData')
const transferUrl = require('../../public/javascripts/transferUrl')


// 首頁渲染
router.get('/', (req, res) => {
  const shortenOne = false
  res.render('index', { shortenOne })
})


// 資料處理
router.post('/', (req, res) => {
  // 若輸入為空
  if (!req.body) return res.redirect('/')

  // 製造短網址
  const shortenOne = transferUrl()

  // 查找輸入的網址是否已存入資料庫
  Url.findOne({ originUrl: req.body.originUrl })
    // 若有則取出，若無則存入
    .then(data => data ? data : Url.create({ originUrl: req.body.originUrl, shortenedUrl: shortenOne }))
    // 以該資料重新渲染頁面
    .then(data => { res.render('index', { shortenOne: data.shortenedUrl }) })
    .catch(error => console.log(error))
})


module.exports = router