import { Sequelize } from "sequelize";
import dbConfig from "./db.config.js";

const db = new Sequelize(`${dbConfig.dialect}://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`
    // {
    // // dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    // // host: dbConfig.HOST,
    // // port: dbConfig.PORT,
    // // dialect: dbConfig.dialect,
    // }
);

export default db;