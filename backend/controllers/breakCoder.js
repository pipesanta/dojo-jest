'use strict'

const uuidV4 = require("uuid/v4");

class GameController {
    constructor() {

    }

    static testController(req, res) {

        const testResponse = { date: Date.now(), name: 'testig funciton' };

        res.status(200)
            .json(testResponse)
    }


}

module.exports = GameController;