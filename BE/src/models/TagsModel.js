import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;
const Tags = db.define('tags',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tid:{ 
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama_tags:{ 
        type: DataTypes.STRING, 
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    
    },{
        freezeTableName: true
    }
);

export default Tags;