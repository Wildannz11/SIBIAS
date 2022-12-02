import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Users from "./UserModel.js";
import Diskusi from "./DiskusiModel.js";

const {DataTypes} = Sequelize;
const ChatDiskusi = db.define('chatdiskusi',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cdid:{ 
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
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
    diskusiId:{ 
        type: DataTypes.INTEGER, 
        allowNull: true,
        validate:{
            notEmpty: true,
        },
        onDelete: "CASCADE",
    },
    isi_chat:{ 
        type: DataTypes.STRING, 
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
},{
    freezeTableName: true
})

Users.hasMany(ChatDiskusi,
    {
        foreignKey: 'userId'
    }
);

ChatDiskusi.belongsTo(Users,
    {
        foreignKey: 'userId'
    }
);

export default ChatDiskusi;