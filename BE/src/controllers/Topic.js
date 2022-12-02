import Topic from "../models/TopicModel.js";
import TopicDiskusi from "../models/Topic_DiskusiModel.js";
import Diskusi from "../models/DiskusiModel.js";

export const createTopic = async (req, res) => {
    const {nama_topic} = req.body;
    try {
        await Topic.create({
            nama_topic: nama_topic
        });
        res.status(201).json({msg: "Sukses membuat Topic baru"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

export const createTopicDiskusi = async (req, res) => {
    const {topicId, diskusiId} = req.body;
    try {
        await TopicDiskusi.create({
            topicId: topicId,
            diskusiId: diskusiId
        });
        res.status(201).json({msg: "Sukses membuat TopicDiskusi baru"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

export const getTopic = async (req, res) => {
    try {
        let response;
        
        response = await TopicDiskusi.findAll({
            include:[{
                model: Topic,
              }, {
                model: Diskusi,
            }],
        });
        
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getTopicById = async (req, res) => {
    try {
        const topicDiskusi = await TopicDiskusi.findAll({
            where:{
                topicId: req.params.id
            }
        });

        if (!topicDiskusi) {
            return res.status(404).json({msg: "Topic diskusi tidak ditemukan"});
        }

        let response;
        response = await TopicDiskusi.findAll({
            where: {
                topicId: topicDiskusi.topicId
            },
            include:[{
                model: Topic,
            }, {
                model: Diskusi,
            }],
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const editTopic = async (req, res) => {
    try {
        const topic = await Topic.findOne({
            where: {
                toid: req.params.id
            }
        });
        
        if (!topic) {
            return res.status(404).json({msg: `Topic dengan id ${topic.toid} tidak ditemukan`});
        }

        const {nama_topic} = req.body;
        if (req.role === "rakyat" || req.role === "Rakyat") {
            await Topic.update(
                {
                    nama_topic: nama_topic                
                },
                { 
                    where:{
                        toid: topic.toid
                    // [Op.and]: [{did: diskusi.did}, {userId: req.uid}]
                    }
                }
            );    
        } else {
            return res.status(404).json({msg: "Pemerintah tidak dapat mengupdate Topic"})
        }

        res.status(200).json({msg: "Sukses mengedit Topic"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const editTopicDiskusi = async (req, res) => {
    try {
        const topicDiskusi = await TopicDiskusi.findOne({
            where: {
                id: req.params.id
            }
        });
        
        if (!topicDiskusi) {
            return res.status(404).json({msg: `Topic dengan id ${topicDiskusi.topicId} tidak ditemukan`});
        }

        const {topicId, diskusiId} = req.body;
        if (req.role === "rakyat" || req.role === "Rakyat") {
            await TopicDiskusi.update(
                {
                    topicId: topicId,
                    diskusiId: diskusiId
                },
                { 
                    where:{
                        id: topicDiskusi.id
                    // [Op.and]: [{did: diskusi.did}, {userId: req.uid}]
                    }
                }
            );    
        } else {
            return res.status(404).json({msg: "Pemerintah tidak dapat mengupdate Topic diskusi"})
        }

        res.status(200).json({msg: "Sukses mengedit TopicDiskusi "});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteTopic = async (req, res) => {
    try {
        const topic = await Topic.findOne({
            where: {
                toid: req.params.id
            }
        });

        if (!topic) {
            return res.status(404).json({msg: `Topic dengan nama ${topic.nama_Topic} tidak ditemukan`});
        }

        if (req.role === "rakyat" || req.role === "Rakyat") {
            await Topic.destroy({ 
                where:{
                    toid: topic.toid
                    // [Op.and]: [{did: diskusi.did}, {userId: req.uid}]
                }
            });      
        } else {
            return res.status(404).json({msg: "Pemerintah tidak dapat menghapus Topic diskusi"})
        }

        res.status(200).json({msg: "Sukses menghapus Topic diskusi"});
    } catch (error) {
        res.status(500).json({msg: error.message}); 
    }
}

export const deleteTopicDiskusi = async (req, res) => {
    try {
        const topicDiskusi = await TopicDiskusi.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!topicDiskusi) {
            return res.status(404).json({msg: `TopicDiskusi dengan id ${topicDiskusi.id} tidak ditemukan`});
        }

        if (req.role === "rakyat" || req.role === "Rakyat") {
            await TopicDiskusi.destroy({ 
                where:{
                    id: topicDiskusi.id
                    // [Op.and]: [{did: diskusi.did}, {userId: req.uid}]
                }
            });      
        } else {
            return res.status(404).json({msg: "Pemerintah tidak dapat menghapus Topic diskusi"})
        }

        res.status(200).json({msg: "Sukses menghapus Topic diskusi"});
    } catch (error) {
        res.status(500).json({msg: error.message}); 
    }
}