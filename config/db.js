import { Sequelize } from "sequelize";
import 'dotenv/config' //importa o arquivo .env

export const db = new Sequelize(process.env.BD,'root',process.env.BD_SENHA,{
    host:'localhost',
    dialect:'mysql',
    port:'3306'
});

