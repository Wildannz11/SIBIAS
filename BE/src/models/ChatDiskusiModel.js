import { Sequelize } from "sequelize";
import db from "../config/db.js";
// import Users from "./UserModel.js";
// import Diskusi from "./DiskusiModel.js";

const {DataTypes} = Sequelize;
const ChatDiskusis = db.define('chatdiskusi',{
    // id:{
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    cdid:{ 
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
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
            key: "uid"
        }
    },
    diskusiId:{ 
        type: DataTypes.STRING, 
        allowNull: true,
        validate:{
            notEmpty: true,
        },
        onDelete: "CASCADE",
        references: {
            model: "diskusi",
            key: "did"
        }
    },
    isi_chat:{ 
        type: DataTypes.TEXT, 
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
},{
    freezeTableName: true
})

// Users.hasMany(ChatDiskusis,
//     {
//         foreignKey: 'userId'
//     }
// );

// ChatDiskusis.belongsTo(Users,
//     {
//         foreignKey: 'userId'
//     }
// );

// ChatDiskusis.belongsTo(Diskusi,
//     {
//         foreignKey: 'diskusiId'
//     }
// );

// Diskusi.hasMany(ChatDiskusi,
//     {
//         foreignKey: 'diskusiId'
//     }
// );

export default ChatDiskusis;