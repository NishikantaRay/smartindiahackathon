const { mongoDBUser, mongoDBPassword, mongoDBDatabase } = require("./env.config");

module.exports = {
    mongoUri : `mongodb+srv://${mongoDBUser}:${mongoDBPassword}@sih.6hjpv.mongodb.net/${mongoDBDatabase}?retryWrites=true&w=majority`
}