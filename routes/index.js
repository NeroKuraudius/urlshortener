// 總路由器

const express = require('express')
const router = express.Router()

const homePage = require('./modules/home')

router.use('/', homePage)

module.exports = router