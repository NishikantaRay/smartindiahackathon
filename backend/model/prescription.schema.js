const mongoose = require('mongoose');

const prescriptionSchema = mongoose.Schema({
    docNo : {
        type : String,
        required : true
    },
    patientName : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    drugs : [ {
        name : {
            type : String,
            required : true
        },
        potency : {
            type : String,
            required : true
        },
        dosage : {
            type : String,
            required : true
        },
        days : {
            type : Number,
            required : true
        }
    }]
});

module.exports = mongoose.model('Prescription', prescriptionSchema);