const express = require('express');
const route = require('./routes/route');
var cors = require('cors')


let app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/language",route(express));
app.listen(3000, () => {
    console.log('Success running 3000');
});
module.exports = app;