const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const register = require('./controllers/user').register;
const login = require('./controllers/user').login;
const port = 4000;
const mongoDB = 'mongodb://localhost/ramverkdb001';

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(mongoDB, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('MongoDB connected.'))
    .catch((err) => console.log('MongoDB connection error: ', err));

app.post('/register', register);
app.post('/login', login);

app.listen(port, function(){
    console.log(`Server is running on Port: ${port}`);
});
