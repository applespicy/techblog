const { User } = require('../model');

const userData = [
    {
        username: 'test1',
        password: 'passwrd1'
    },
    {
        username: 'test2',
        password: 'passwrd2'
    },
    {
        username:'test3',
        password:'passwrd3'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;