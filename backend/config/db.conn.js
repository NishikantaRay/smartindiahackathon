const mongoose = require('mongoose');
const { mongoUri } = require('./db.config');

let mongoDBConn = async () => {
    try {
        await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
            console.log("DB connected");
        });
    } catch(err) {
        console.log("Unable to connect\n" + err);
    }
};

module.exports = mongoDBConn;