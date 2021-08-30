const Router = require('express').Router
const router = Router()
const { getCopyHandler } = require('./request-handlers')

router.get('/get-copy', getCopyHandler)

module.exports = { router }
