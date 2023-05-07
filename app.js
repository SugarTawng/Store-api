const express = require('express');
const app = express();
require('express-async-errors');
// const tasks = require('./routes/tasks');
const product = require('./routes/products');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/product', product);
app.get('/',(req, res)=>{
    res.send("<h1>Product api<\h1> <a href='/api/v1/product'> Product</a>");
})

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
