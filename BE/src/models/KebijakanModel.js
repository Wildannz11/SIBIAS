import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Users from "./UserModel.js";
import Tags from "./TagsModel.js";

const {DataTypes} = Sequelize;
const Kebijakan = db.define('kebijakan',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    kid:{ 
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    judul_kebijakan:{ 
        type: DataTypes.STRING, 
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
    isi_kebijakan:{ 
        type: DataTypes.TEXT, 
        allowNull: true,
    },
    foto_data:{ 
        type: DataTypes.STRING, 
        allowNull: true,
    },
    foto_url:{ 
        type: DataTypes.STRING, 
        allowNull: true,
    },
    jumlah_kunjungan:{ 
        type: DataTypes.BIGINT, 
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    sudah_publish: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    userId:{ 
        type: DataTypes.INTEGER, 
        allowNull: true,
        validate:{
            notEmpty: true,
        },
        onDelete: "CASCADE",
    },
},{
    freezeTableName: true
})

Users.hasMany(Kebijakan, 
    {
        foreignKey: 'userId'
    }
);
Kebijakan.belongsTo(Users, 
    {
        foreignKey: 'userId',
    }
);


export default Kebijakan;