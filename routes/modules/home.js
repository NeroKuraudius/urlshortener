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
  // 例外處理：若輸入為空
  if (!req.body) return res.redirect('/')

  const shortenOne = transferUrl()

  // 例外處理：查找輸入的網址是否已存入資料庫
  Url.findOne({ originUrl: req.body.originUrl })
    // 若有則取出，若無則存入
    .then(data => data ? data : Url.create({ originUrl: req.body.originUrl, shortenedUrl: shortenOne }))
    // 以該資料重新渲染頁面
    .then(data => {
      res.render('index', { origin: req.headers.origin, shortenOne: data.shortenedUrl })
    })
    .catch(error => console.log(error))
})


// 點擊短網址呈現原網頁
router.get('/:shortenedUrl', (req, res) => {
  const { shortenedUrl } = req.params

  Url.findOne({ shortenedUrl })
    .then(data => {
      if (!data) { res.send("Error! We didn't find this url Please check it again.") }
      res.redirect(data.originUrl)
    })
})


module.exports = router