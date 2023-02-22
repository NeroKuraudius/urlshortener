const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dataSchema = new Schema({
  originUrl :{
    type: String,
    require: true
  },
  shortenedUrl: {
    type: String,
    require: true
  }
})

module.exports= mongoose.model('Url',dataSchema)