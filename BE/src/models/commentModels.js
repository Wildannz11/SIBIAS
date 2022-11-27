import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Diskusi from "./diskusiModels.js";

const {DataTypes} = Sequelize;

const Comment_diskusi = db.define('comment_diskusi',{
    cid:{ 
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
        // onDelete: "CASCADE",
        // references: {
        //     model: "user",
        //     key: "uid",
        // }
    },
    diskusiId:{ 
        type: DataTypes.STRING, 
        allowNull: true,
        validate:{
            notEmpty: true,
        },
        // onDelete: "CASCADE",
        // references: {
        //     model: "diskusi",
        //     key: "did",
        // }
    },
    isi_comment:{ 
        type: DataTypes.STRING, 
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },

},{
    freezeTableName: true
});
// Users.hasMany(Comment_diskusi, 
//     {
//         foreignKey: 'userId',
//         foreignKey: 'diskusiId'
//     }
// );
// Comment_diskusi.belongsTo(Users, Diskusi, 
//     {
//         foreignKey: 'userId',
//         foreignKey: 'diskusiId'
//     }
// );


export default Comment_diskusi;