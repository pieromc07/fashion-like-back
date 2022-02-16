const { Sequelize } = require('sequelize')

const database = process.env.DATABASE_NAME || 'fashion_like_db'
const username = process.env.DATABASE_USER || 'root'
const password = process.env.DATABASE_PASSWORD || 'hackuser07'
const host = process.env.DATABASE_HOST || 'localhost'
const dialect = process.env.DATABASE_DIALECT || 'mysql'

const sequelize = new Sequelize({
    database : database,
    username : username,
    password : password,
    host : host,
    dialect : dialect
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Connection was not established. ', err);
});



module.exports = sequelize