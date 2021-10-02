'use strict'

require('dotenv').load();
const express = require("express");
const { Observable, concat } = require('rxjs')
const app = express();
const bodyParser = require('body-parser');
const port = parseInt(process.env.REST_END_POINT_PORT || '2015');
const endPoint = process.env.REST_HTTP_END_POINT || 'localhost';

// const { AuthorizationRoutes, BookRoutes } = require('./routes');
// const routesInDomain = [AuthorizationRoutes, BookRoutes];
// const routesInDomain = [];
const { tap, delay, toArray } = require('rxjs/operators');

//  DATA BASE
// const MongoDB = require("./services/MongoDB");

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow --- application/json, text/plain, */*
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function startExpress$() {
    return Observable.create(observer => {
        observer.next("Starting express aplication");
        // routesInDomain.forEach(route => route.applyRoutes(app));

        app.get('', (req, res) => {
            res.send({ msg: "HOME ROUTE ENABLED" });
        });

        const server = app.listen(port, () => {
            console.log(`REST server is running at ${endPoint}:${port}`);
        });

        // setupWebSocket(server);

        observer.complete();
    });
}

concat(
    // MongoDB.start$,
    startExpress$(),
).pipe(toArray())
    .subscribe(() => {
        console.log('SE TEMINO DE CREAR EL FLUJO PRINCIPAL DEL SERVER');
    },
        error => {
            console.log('ERROR ===> ', error);
        },
        () => {
            // console.log('on complete');
        }
    );