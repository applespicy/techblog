const seedPost = require('./postSeed');
const seedUser = require('./userSeed');
const seedComment = require('./commentSeed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Database synced');
    await seedPost();
    console.log(' post data seeded');
    await seedUser();
    console.log('user data seeded');
     await seedComment();
    console.log('comment data seeded');

    process.exit(0);
};

seedAll();