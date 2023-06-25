const express = require("express");
const cors = require('cors');
const app = express();

const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');


const cars = require('./models/cars.model');
const carsRouter = require('./routes/cars');


const school = require('./models/school.model');
const schoolRouter = require('./routes/school');
app.use(express.json());
app.use(cors());


app.use(carsRouter);
app.use(schoolRouter);





app.get('/', (req, res) => {
    res.status(200).json({
        message:'Welcome to home Page'
    })
})





app.use("*", notFoundHandler );
app.use(errorHandler);

function start(port) {
    app.listen(port, () => { 
    console.log("Running on PORT ", port);
})

}


module.exports = {

    start,
    app

}



