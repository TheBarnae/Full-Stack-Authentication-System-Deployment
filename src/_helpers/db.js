const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql',
        logging: false,
        dialectOptions: {
            // Required for some cloud MySQL providers like Aiven or DigitalOcean
            ssl: process.env.DB_SSL === 'true' ? {
                rejectUnauthorized: false
            } : false
        }
    }
);

const db = {};

// Import models
db.Account = require('../models/user.model')(sequelize);
db.RefreshToken = require('../models/refresh-token.model')(sequelize);

// Relationships
// db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
// db.RefreshToken.belongsTo(db.Account);

// Initialize (sync tables)
db.initialize = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ MySQL connection established successfully.');

        // Sync models individually to ensure correct order for foreign keys
        // especially on some shared hosting environments.
        // await db.Account.sync();
        // await db.RefreshToken.sync();
        
        // console.log('✅ Database tables synchronized.');
    } catch (error) {
        console.error('❌ Unable to connect to MySQL:', error.message);
        throw error;
    }
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
