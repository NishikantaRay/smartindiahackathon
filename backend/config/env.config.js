const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port : process.env.PORT,
    mongoDBUser: process.env.MONGODB_USERNAME,
    mongoDBPassword : process.env.MONGODB_PASSWORD,
    mongoDBDatabase : process.env.MONGODB_DATABASE,
};