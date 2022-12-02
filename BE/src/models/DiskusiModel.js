import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Users from "./UserModel.js";
import ChatDiskusi from "./ChatDiskusiModel.js";

const {DataTypes} = Sequelize;

const Diskusi = db.define('diskusi',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    did:{ 
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    judul_diskusi:{ 
        type: DataTypes.STRING, 
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    jumlah_kunjungan:{ 
        type: DataTypes.BIGINT, 
        allowNull: true,
        validate:{
            notEmpty: true,
        }
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
});

Users.hasMany(Diskusi, 
    {
        foreignKey: 'userId'
    }
);
Diskusi.belongsTo(Users, 
    {
        foreignKey: 'userId'
    }
);

Diskusi.hasMany(ChatDiskusi,
    {
        foreignKey: 'diskusiId'
    }
);

ChatDiskusi.belongsTo(Diskusi,
    {
        foreignKey: 'diskusiId'
    }
);


export default Diskusi;