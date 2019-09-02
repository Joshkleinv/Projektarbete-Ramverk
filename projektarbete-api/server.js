const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function(){
    console.log(`Server is running on Port: ${port}`);
});