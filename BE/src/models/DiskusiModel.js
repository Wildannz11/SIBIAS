import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Diskusi = db.define('diskusi',{
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
        type: DataTypes.STRING, 
        allowNull: true,
        validate:{
            notEmpty: true,
        },
        onDelete: "CASCADE",
        references: {
            model: "user",
            key: "uid",
        }
    }
    // chatId:{ 
    //     type: DataTypes.STRING, 
    //     allowNull: false,
    //     validate:{
    //         notEmpty: true,
    //     }
    // }
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
        foreignKey: 'userId',
    }
);

export default Diskusi;