const express = require('express');
const mongoDBConn = require('./config/db.conn');
const { port } = require('./config/env.config');

const app = express();

app.use(express.json());
app.use('/api/prescription/', require('./routers/prescription'));
app.use('/api/medicine/', require('./routers/medicine'));
app.use('/api/transaction/', require('./routers/transaction'));

mongoDBConn();

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});