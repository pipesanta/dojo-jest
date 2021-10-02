'use strict'

const moment = require('moment');
const jwt = require('jwt-simple');
const SECRET_TOKEN_KEYS = process.env.SECRET_TOKEN_KEYS;

function fakeLoginService(username, pass){

    const fakeUsers = [
        {username: "juan.santa", pass: "pass123" },
        {username: "harry", pass: "pass123" },
    ]
    return fakeUsers.find(u => u.username === username && u.pass === pass)

}

function login(req, res){
    if (!req) res.send(202);

    let jwt_encoded = null;

    const { username, pass } = req.body || {};
    if( fakeLoginService(username, pass) ){
        const payload = {
            sub: username,
            iat: Date.now(),
            exp: moment(Date.now()).add(4, "hours").valueOf()
        }
        jwt_encoded = jwt.encode(payload, SECRET_TOKEN_KEYS);        

    }

    if(jwt_encoded){
        res.status(200).json({ code: 200, token: jwt_encoded })
    }else{
        res.status(200).json({ code: 100 })
    }

}

function logout(req, res){
    res.status(200).send("OK")
}

module.exports = {
    login,
    logout
}