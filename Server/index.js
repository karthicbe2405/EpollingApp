let bodyParser = require('body-parser');
let express = require('express');
let cors = require('cors');
let mongoose = require('./db');
let AdminController = require('./Controller/AdminController');
let UserController = require('./Controller/UserController');
let app = express();

app.use(bodyParser.json());
app.use(cors({origin : 'http://localhost:4200'}));
app.listen(3000,()=>{console.log('Serverstarts');});

app.use('/admin',AdminController);
app.use('/User',UserController);
