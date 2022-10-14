import { Sequelize } from 'sequelize';

// const dbDatabase = process.env.DB_DATABASE as string;
// const dbUsername = process.env.DB_USERNAME as string;
// const dbHost = process.env.DB_HOST;
// const dbDriver = process.env.DB_DIALECT as Dialect;
// const dbPort: number = parseInt(process.env.DB_PORT as string);
// const dbPassword = process.env.DB_PASSWORD 

// const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: process.env.DB_DIALECT,
// });

const db = new Sequelize("trabalhoTS", "postgres", "mestreJedi", {
    host: "localhost",
    port: 5432,
    dialect: "postgres"
});

async function testandoDatabase() {
    try {
        await db.authenticate();
        console.log('tudo certo')
    } catch (ERRO) {
        console.log(' Erro ' + ERRO)
    }
}
testandoDatabase();

// db.sync();
export default db;



