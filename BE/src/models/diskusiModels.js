import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Diskusi = db.define('diskusi',{
    did:{ 
        type: DataTypes.STRING,
        primaryKey: true,
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
    isi_diskusi:{ 
        type: DataTypes.STRING, 
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    total_lihat:{ 
        type: DataTypes.INTEGER(255),
        allowNull: true
    },
    topicId:{ 
        type: DataTypes.STRING, 
        allowNull: false,
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
        // onDelete: "CASCADE",
        // references: {
        //     model: "user",
        //     key: "uid",
        // }
    }
},{
    freezeTableName: true
});
// Users.hasMany(Diskusi, 
//     {
//         foreignKey: 'userId'
//     }
// );
// Diskusi.belongsTo(Users, 
//     {
//         foreignKey: 'userId',
//     }
// );


export default Diskusi;