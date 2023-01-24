
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
dotenv.config();

mongoose.set('strictQuery', true);

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use('/api', userRoutes);


// routes
app.get('/', (req, res) => res.send('Hello World!'));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('CONNECT DB'))
    .catch((error) => console.log('Error',error));


//
app.listen(port, () => console.log(`Example app listening on port ${port}!`))