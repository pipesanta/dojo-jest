'use strict'

const { mongoDB }   = require("../services/MongoDB");
const { mergeMap, tap, toArray, catchError, map }  = require("rxjs/operators");
const uuidV4 = require("uuid/v4");

const MongoDB = require("../services/MongoDB").mongoDB;
const { defer, of } = require("rxjs");

const DB_NAME = process.env.MONGODB_DB_NAME || "MinLibrary";
const COLLECTION_NAME = "books";

class BookController{
    constructor(){
        
    }

    static findBook(req, res){
        const collection = MongoDB.client.db(DB_NAME).collection(COLLECTION_NAME);
        // console.log({ DB_NAME, COLLECTION_NAME });
        const { query } = req;

        const queryOptions = {
            $or: [
                { title:    { '$regex' : query.filter, '$options' : 'i'} },
                { author:   { '$regex' : query.filter, '$options' : 'i'} },
                { code:     { '$regex' : query.filter, '$options' : 'i'} },
            ]
        };

        defer(() => collection.find(queryOptions).limit(10).toArray()).pipe(
            catchError(err => {
                console.log(err);
                return of(null)
            })
        ).subscribe(r => {
            if(r === null){
                res.status(500).json({});
            }else{
                res.status(200).json(r);
            }
            
        });
    }

    static insertOne(req, res){
        const collection = MongoDB.client.db(DB_NAME).collection(COLLECTION_NAME);
        const { code, title, author, state, location } = req.body;
        const book = {
            _id: uuidV4(),
            code, title, author, location,
            state, borrow: null
        };
        
        defer(() => collection.insertOne(book) ).pipe(
            catchError(err => of({}))
        ).subscribe(r => {
            const inserted = (r.result || {}).n === 1;
            res.status(200).json({inserted: inserted});
        });
    }

    static deleteOne(req, res){
        const collection = MongoDB.client.db(DB_NAME).collection(COLLECTION_NAME);
        const { id } = req.body;
        
        defer(() => collection.deleteOne({ _id: id }) ).pipe(
            catchError(err => { console.log(err); return of({}) })
        ).subscribe(r => {
            const deleted = (r.result||{}).n === 1;
            res.status(200).json({ deleted: deleted });
        });

    }

    static findOneById(req, res){
        const collection = MongoDB.client.db(DB_NAME).collection(COLLECTION_NAME);
        const { id } = req.query;
        
        defer(() => collection.findOne({ _id: id }) ).pipe(
            catchError(err => { console.log(err); return of({}) })
        ).subscribe(r => { res.status(200).json(r) });
    }

    static updateOneById(req, res){
        const collection = MongoDB.client.db(DB_NAME).collection(COLLECTION_NAME);
        const { id, code, title, author, location, state } = req.body;

        const query = { _id: id };
        const update = { code, title, author, location, state };
        
        defer(() => collection.updateOne(query, { $set: update }) ).pipe(
            catchError(err => { console.log(err); return of({}) })
        ).subscribe(r => {
            const updated = (r.result || {}).n === 1;
            res.status(200).json({ updated });
        });
    }

}

module.exports = BookController;