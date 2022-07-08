const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    // 1 - Manufacturer
    // 2 - Distributor
    // 3 - Pharmacist
    // 4 - Customer / Patient
    type: {
        type: Number,
        required: true
    },
    medicineId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Medicine',
        required: true
    },
    medicineName: {
        type: String,
        required: true
    },
    /*
    * For Manufacturer:
    *   - make medicine - order generate - shipped to distributor
    * For Distributor:
    *   - received - order generate - shipped to pharamacist
    * For Pharmacist:
    *   - received - order generate - sold to customer
    * For Customer / Patient:
    *  - received
    */
    action: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    to: {
        type: String,
        required: true 
    },
    prescriptionId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Prescription',
    },
    timestamp : {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Transaction', transactionSchema);