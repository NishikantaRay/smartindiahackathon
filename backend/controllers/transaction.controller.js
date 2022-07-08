const transactionSchema = require('../model/transaction.schema');

exports.addTxn = async (req, res) => {
    try {
        const newTxn = await transactionSchema(req.body);
        await newTxn.save();
        res.status(200).json({
            message: "Transaction added successfully",
        });
        console.log("Transaction added successfully");
    } catch(err) {
        res.status(400).json({
            message: "Error in adding transaction",
            error : err
        });
    }    
};

exports.getAllTxn = async (req, res) => {
    try {
        const transaction = await transactionSchema.find({});
        if(transaction) {
            res.status(200).json({
                message: "200 : Listing all transactions",
                transaction
            });
            console.log("Transaction found successfully");
        } else {
            res.status(404).json({
                message: "Transaction not found",
            });
            console.log("Transaction not found");
        }
    } catch(err) {
        res.status(400).json({
            message: "Error in finding transaction",
            error : err
        });
    }
}

exports.getTxnById = async (req, res) => {
    try {
        const transaction = await transactionSchema.findById(req.params.id);
        if(transaction) {
            res.status(200).json({
                message: "Txn Found",
                transaction
            });
            console.log("Transaction found successfully");
        } else {
            res.status(404).json({
                message: "Transaction not found",
            });
            console.log("Transaction not found");
        }
    } catch(err) {
        res.status(400).json({
            message: "Error in finding transaction",
            error : err
        });
    }
}

exports.getTxnChain = async (req, res) => {
    try {
        const query = await transactionSchema.findById(req.body.id);
        var chain = [];
        chain.push(query);
        console.log(query);
        if(query) {
            var id = query['medicineId'];
            while(id != null){
                var data = await transactionSchema.findById(id);
                chain.push(data);
                id = data['from'];
            }
            res.status(200).json({
                message: "Txn Chain Found",
                chain : chain
            });
        } else {
            res.status(404).json({
                message: "Txn Chain not found",
            });
            console.log("Txn Chain not found");
        }
    } catch(err) {
        res.status(400).json({
            message: "Error in finding transaction chain",
            error : err
        });
    }
}