import { Sequelize } from "sequelize";
import Kebijakan from "./KebijakanModel.js";
import Tags from "./TagsModel.js";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const TagsKebijakan = db.define('tags_kebijakan',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tagsId: {
        type: DataTypes.INTEGER,
    },
    kebijakanId: {
        type: DataTypes.INTEGER,
    },
},{
    freezeTableName: true
});

TagsKebijakan.belongsTo(Tags,{
    foreignKey: 'tagsId'
});

TagsKebijakan.belongsTo(Kebijakan,{
    foreignKey: 'kebijakanId'
});


export default TagsKebijakan;