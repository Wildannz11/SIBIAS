import Topic from "../models/topicModels.js";
import { Op } from "sequelize";

export const getTopic = async (req, res) => {
    try {
        let response;
            response = await Topic.findAll({
                attributes: ['tid','nama_topic'],
                // include:[{
                //     model: Users,
                //     attributes:['nama','username','email']
                // }],
            });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getTopicById = async (req, res) => {
    try {
        const topic = await Topic.findOne({
            where:{
                tid: req.params.id
            }
        });

        if (!topic) {
            return res.status(404).json({message: "Topic tidak ditemukan"});
        }

        let response;
            response = await Topic.findOne({
                attributes: ['tid','nama_topic'],
                where: {
                    tid: topic.tid
                },
                // include:[{
                //     model: Users,
                //     attributes:['nama','username','email']
                // }]
            })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createTopic = async (req, res) => {
    const {nama_topic} = req.body;
    try {
        await Topic.create({
            nama_topic: nama_topic,
            // userId: req.uid,
        });
        res.status(201).json({message: "Berhasil membuat Topic baru"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const editTopic = async (req, res) => {
    try {
        const topic = await Topic.findOne({
            where: {
                tid: req.params.id
            }
        });
        
        if (!topic) {
            return res.status(404).json({message: "Topic tidak ditemukan"});
        }

        const {nama_topic} = req.body;
        
            // if (req.uid === Topic.userId) {
            await Topic.update(
                {
                    nama_topic: nama_topic
                },
                { where:{
                    tid: topic.tid
                    // [Op.and]: [{tid: topic.tid}, {userId: req.uid}]
                    }
                });
            // } else {
            //     return res.status(403).json({message: "Harus login dengan email dan username yang sesuai"});
            // }
        res.status(200).json({message: "Berhasil mengedit Topic"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteTopic = async (req, res) => {
    try {
        const topic = await Topic.findOne({
            where: {
                tid: req.params.id
            }
        });

        if (!topic) {
            return res.status(404).json({message: "Topic tidak ditemukan"});
        }

            // if (req.uid === Topic.userId) {
                await Topic.destroy({ 
                    where:{
                        tid: topic.tid
                        // [Op.and]: [{did: Topic.did}, {userId: req.uid}]
                    }
                });
            // } else {
            //     return res.status(403).json({message: "Harus login dengan email dan username yang sesuai"});
            // }       
        res.status(200).json({message: "Berhasil menghapus Topic"});
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
}
