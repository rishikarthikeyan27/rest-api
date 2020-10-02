const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')
//Routes
app.get('/', (req,res) => {
    res.send('We are getting better by the day bro');
})

//Connect to DB

mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser : true},
    () => console.log('connected to DB!'))
//Listen
app.listen(3000);