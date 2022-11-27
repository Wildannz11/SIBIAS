import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Topic = db.define('topic',{
    tid:{ 
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
    nama_topic:{ 
        type: DataTypes.STRING, 
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },

},{
    freezeTableName: true
});
// Users.hasMany(Topic, 
//     {
//         foreignKey: 'userId'
//     }
// );
// Topic.belongsTo(Users, 
//     {
//         foreignKey: 'userId',
//     }
// );


export default Topic;