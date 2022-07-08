const { addTxn, getAllTxn, getTxnById, getTxnChain } = require('../controllers/transaction.controller');

const router = require('express').Router();

router.post("/addTransaction", addTxn);

router.get("/getAllTransactions", getAllTxn);

router.get("/getTransaction/:id", getTxnById);

router.post("/getTransactionChain", getTxnChain);

module.exports = router;