const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

const postsRoute = require('./routes/posts');

app.use('/', postsRoute);
//Routes
//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser : true},
    () => console.log('connected to DB!'))
//Listen
app.listen(3000);