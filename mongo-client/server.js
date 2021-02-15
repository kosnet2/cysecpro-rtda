const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger');

const routes = require('./routes/routes');
const errorController = require('./controllers/error');

const server = express()

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended : true }));
server.use(pino());

server.use(routes);
server.use('/', errorController.get404);

MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error(err);
        return;
    }
    server.locals.client = client;
    server.listen(process.env.SERVER_PORT, () => { 
        console.log(`Mongo-Client Server is listening on port ${process.env.SERVER_PORT}`)
    });
});

