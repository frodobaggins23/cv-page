require('dotenv').config()
const express = require('express')
const { router } = require('./routes')
const app = express()
const spreadsheetHelper = require('./spreadsheet-helper')
const spreadsheetService = require('./spreadsheet-service')
const port = process.env.SERVER_PORT

const injectService = async (req, res, next) => {
  req.spreadsheetService = spreadsheetService
  req.spreadsheetHelper = spreadsheetHelper
  next()
}

app.use('/api', injectService, router)

app.listen(port, () => {
  console.log(`backend listening at http://localhost:${port}`)
})
