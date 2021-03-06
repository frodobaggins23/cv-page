require('dotenv').config()
const path = require('path')
const express = require('express')
const { router } = require('./routes')
const app = express()
const spreadsheetHelper = require('./spreadsheet-helper')
const spreadsheetService = require('./spreadsheet-service')
const port = process.env.PORT || 5051

const injectService = async (req, res, next) => {
  req.spreadsheetService = spreadsheetService
  req.spreadsheetHelper = spreadsheetHelper
  next()
}

app.use(express.static(path.join(__dirname, '../public/')))

app.use('/api', injectService, router)

app.listen(port, () => {
  console.log(`backend listening at http://localhost:${port}`)
  console.log(`bundling from ${path.join(__dirname, '../public')}`)
})
