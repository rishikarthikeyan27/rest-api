const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');
require('dotenv/config');

//body-parser to get the json

app.use(bodyParser.json());



//Routes

app.use('/posts', postsRoute);


//Connect to DB

mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser : true},
    () => console.log('Ok'))


//Listen
app.listen(3000);