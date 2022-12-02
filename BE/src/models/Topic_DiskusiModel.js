import { Sequelize } from "sequelize";
import Diskusi from "./DiskusiModel.js";
import Topic from "./TopicModel.js";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const TopicDiskusi = db.define('topic_diskusi',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    topicId: {
        type: DataTypes.INTEGER,
    },
    diskusiId: {
        type: DataTypes.INTEGER,
    },
},{
    freezeTableName: true
});

TopicDiskusi.belongsTo(Topic,{
    foreignKey: 'topicId'
});

TopicDiskusi.belongsTo(Diskusi,{
    foreignKey: 'diskusiId'
});


export default TopicDiskusi;