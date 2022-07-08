const medicineSchema = require("../model/medicine.schema");

exports.addMedicine = async (req, res) => {
    try {
        const newMedicine = await medicineSchema(req.body);
        await newMedicine.save();
        res.status(200).json({
            message: "Medicine added successfully",
        });
        console.log("Medicine added successfully");
    } catch(err) {
        res.status(400).json({
            message: "Error in adding medicine",
            error : err
        });
    }
};

exports.getMedicine = async (req, res) => {
    try {
        const medicine = await medicineSchema.find({});
        if(medicine) {
            res.status(200).json({
                message: "Medicine found successfully",
                res : medicine
            });
            console.log("Medicine found successfully");
        } else {
            res.status(404).json({
                message: "Medicine not found",
            });
            console.log("Medicine not found");
        }
    } catch(err) {
        res.status(400).json({
            message: "Error in finding medicine",
            error : err
        });
    }
};