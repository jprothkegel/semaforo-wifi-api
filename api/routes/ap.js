const express = require('express')
const router = express.Router()

const apController = require('../controllers/ap')

router.post('/aps', apController.get_ap_id)

module.exports = router