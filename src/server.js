const express = require("express");
const cors = require('cors');
const app = express();

const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');




const bookRouter = require('./routes/book');
const authorRouter = require('./routes/author');

const schoolRouter = require('./routes/school');
const studentRouter = require('./routes/student');

app.use(express.json());
app.use(cors());
app.use(bookRouter);
app.use(authorRouter);
app.use(schoolRouter);
app.use(studentRouter);

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



