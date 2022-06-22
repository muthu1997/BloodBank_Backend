const express = require('express');
const http = require('http')
const app = express();
const { Router } = require('express');
const route = new Router();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const UserData = require('./src/app');
const User = require('./src/index');
require('dotenv').config()
const { getUserDetails, newUser, login, deleteUser, editUser } = require('./src/controller');

//API Version
const API = "/api";
//Middleware to get json data
app.use(express.json());
//This will give logs of every request
app.use(morgan('tiny'));
//Error handling
app.use(cors());
app.options('*', cors());
//API connections 
const apps = express(UserData)
const server = http.createServer(apps)
mongoose.connect("mongodb+srv://muthukumar1997:Muthu%40Tech%24@cluster0.aw0qx.mongodb.net/eshopdb?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => {
        console.log('Database Connected Successfully');
    })
    .catch(err => {
        console.log(err)
    })

app.get(`/user`, getUserDetails);
app.post(`/newUser`, newUser);
app.post(`/login`, login);
app.put(`/deleteUser/:id`, deleteUser);
app.post(`/editUser`, editUser);
app.listen(process.env.PORT || 3000, () => {
    console.log('Port is listening')
})