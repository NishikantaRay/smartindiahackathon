const { addMedicine, getMedicine } = require('../controllers/medicine.controller');

const router = require('express').Router();

router.post('/addMedicine', addMedicine);

router.get('/getMedicine', getMedicine);

module.exports = router;