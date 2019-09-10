const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const socket = require('socket.io');
const register = require('./controllers/user').register;
const login = require('./controllers/user').login;
const getUser = require('./controllers/user').getUser;
const validateRegistration = require('./validation/validation').validateRegistration;
const validateLogin = require('./validation/validation').validateLogin;
const validateMessage = require('./validation/validation').validateMessage;
const saveMessages = require('./controllers/message').saveMessages;
const getMessages = require('./controllers/message').getMessages;
const postNews = require('./controllers/news').postNews;

const port = 4000;
const mongoDB = 'mongodb://localhost/ramverkdb001';

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(mongoDB, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('MongoDB connected.'))
    .catch((err) => console.log('MongoDB connection error: ', err));

app.post('/register', validateRegistration, register);
app.post('/login', validateLogin, login);
app.post('/messages', validateMessage, saveMessages);
app.post('/news', postNews);
app.get('/messages', getMessages);
app.get('/user', getUser);

server = app.listen(port, function(){
    console.log(`Server is running on Port: ${port}`);
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('SEND_MESSAGE', (data) => {
        io.emit('RECEIVE_MESSAGE', data);
    })
});
