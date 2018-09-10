const subdomain = require('express-subdomain');
const express = require('express');
const router = express.Router();

router.get('/bars', (req, res) => res.sendFile(__dirname+'/public/bars.json'));
router.get('/', (req, res) => res.send("api v1.0"));
	
module.exports = router;
