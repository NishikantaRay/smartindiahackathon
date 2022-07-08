const prescriptionSchema = require("../model/prescription.schema")

exports.addPrescription  = async (req, res) => {
    try {
        const newPrescription = await prescriptionSchema(req.body);
        await newPrescription.save();
        res.status(200).json({
            message: "Prescription added successfully",
            id : newPrescription._id
        });
        console.log("Prescription added successfully");
    } catch(err) {
        res.status(400).json({
            message: "Error in adding prescription",
            error : err
        });
    }
}

exports.verifyPrescription = async (req, res) => {
    try {
        const prescription = await prescriptionSchema.findById(req.params.id);
        if(prescription) {
            res.status(200).json({
                message: "Prescription verified successfully",
                prescription
            });
            console.log("Prescription verified successfully");
        } else {
            res.status(404).json({
                message: "Prescription not found",
            });
            console.log("Prescription not found");
        }
    } catch(err) {
        res.status(400).json({
            message: "Error in verifying prescription",
            error : err
        });
    }
}