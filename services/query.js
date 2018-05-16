'use strict';

const lodash = require('lodash');

class QueryService {
    constructor(query) {
        this.query = query.q;
    }

    getAnswer() {
        console.log('inside function', this.query);
        switch (this.query) {
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
                return ` ABCD
                        A=<<<
                        B>=<>
                        C>>=>
                        D><<=`;
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
                return false;
                break;
        }
    }
}

module.exports = QueryService;
