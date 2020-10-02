const express = require('express');
const app = express();

//Routes
app.get('/', (req,res) => {
    res.send('We are getting better by the day bro');
})
//Listen
app.listen(3000);