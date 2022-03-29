var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var history = require('connect-history-api-fallback');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { DataTypes } = require('sequelize');
const connection = require('./orm/db-connection');

// Commented old code to test solution - Remove this if solution works on cloud
// var indexRouter = require('./routes/index');

const User = connection.define('User', {
    loginId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

var customersRouter = require('./routes/customers');
var productsRouter = require('./routes/products');
const bcryptjs = require('bcryptjs');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/customers', customersRouter);
app.use('/api/products', productsRouter);
app.use(history({
    verbose: true
}));
// Commented our code to test solution - Remove this if solution works on cloud
// app.use('/', indexRouter);

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
});

app.post('/login', async(req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    let isAuth = false;

    try{
        let user = await User.findOne({
            where: {
                userName: name
            }
        });
        if (user) {
            console.log(`User ${user.userName} found`);
            isAuth = await bcrypt.compare(password, user.password);
            if (isAuth) {
                console.log('User authenticated');
                res.status(200).send('User authenticated');
            } else {
                console.log('User is not authenticated');
                res.status(200).send('User is not authenticated');
            }
        } else {
            console.log(`User not found`);
            res.status(404).send('User not found');
        }
    } catch(error){
        console.log(error);
        res.status(500).send('Failure checking user credentials');
    }
});

module.exports = app;
