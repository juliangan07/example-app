'use strict';

const lodash = require('lodash');

class QueryService {
    constructor(query) {
        this.query = query;
    }

    getAnswer() {
        switch (this.query.q) {
            case 'Ping':
                return 'OK';
                break;

            case 'Phone':
                return '+1 (405) 888 - 1353';
                break;

            case 'Email Address':
                return 'juliangan07@gmail.com';
                break;

            case 'Source':
                return 'https://github.com/juliangan07/example-app';
                break;

            case 'Resume':
                return 'https://www.dropbox.com/sh/oa8jzhh45uxakjp/AABCoc0JdmruUnAYkKt39FUUa?dl=0';
                break;

            case 'Puzzle':
                const answer = this.solvePuzzle(this.query);
                return answer;
                break;

            case 'Years':
                return '1.5 Years';
                break;

            case 'Name':
                return 'Julian Shang-Zhi Gan';
                break;

            case 'Referrer':
                return 'Jenny Gasparis';
                break;

            case 'Status':
                return 'Yes';
                break;

            case 'Degree':
                return 'Bachelors of Business & Administration, majoring in Information Systems';
                break;

            case 'Position':
                return 'Full Stack Software Engineer';
                break;

            default:
                return 'Hello World!';
                break;
        }
    }

    solvePuzzle(query) {
        return;
    }
}

module.exports = QueryService;
