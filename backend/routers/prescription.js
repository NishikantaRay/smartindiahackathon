const { addPrescription, verifyPrescription } = require('../controllers/prescription.controller');

const router = require('express').Router();

router.post("/addPrescription", addPrescription);

router.get("/verifyPrescription/:id", verifyPrescription);

module.exports = router;