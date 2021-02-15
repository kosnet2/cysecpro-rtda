const express = require('express');
const pcapController = require('../controllers/pcap');

const router = express.Router();

router.post('/pcap', pcapController.postNewPcap);

module.exports = router;