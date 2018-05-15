'use strict';

const lodash = require('lodash');

class QueryService {
    constructor(query) {
        this.query = query.q;

        switch (this.query) {
            case 'Ping':
                return 'OK';
                break;

            default:
                return 'TESTING';
                break;
        }
    }
}

module.exports = QueryService;
