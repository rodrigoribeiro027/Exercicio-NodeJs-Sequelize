import { Sequelize } from "sequelize";
import { db } from '../config/db.js'

const Usuario = db.define ('Usuarios',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
    ,
    nome:{
        type:Sequelize.STRING,
        allowNull:true
    },
    mensagem:{
        type:Sequelize.STRING,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:true
    },
})

Usuario.sync({force:true})
export default Usuario