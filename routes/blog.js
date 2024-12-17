const e = require('express');
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
      res.render('index', { title: 'Blog Posts' })
})

module.exports = router