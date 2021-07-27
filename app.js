//import du module express
const express = require('express');

//instanciation du server
const app = express();



//import du module contactRouter
const contactRouter = require('./routes/contactRoutes')

//utilisation du module router des contacts en tant que middleware
app.use('/api/contacts', contactRouter)


//export du module app entant que module JS
module.exports = app;