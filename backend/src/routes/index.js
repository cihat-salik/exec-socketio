const express = require('express')
const socketServer = require('../socket-connection')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' })
})

router.get('/ping', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
