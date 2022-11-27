import Diskusi from "../models/diskusiModels.js";
import { Op } from "sequelize";

export const getDiskusi = async (req, res) => {
    try {
        let response;
        // if (req.role == 'rakyat') {
            response = await Diskusi.findAll({
                attributes: ['did','judul_diskusi','isi_diskusi','createdAt','updatedAt'],
                // include:[{
                //     model: Users,Topic
                //     attributes:['nama','username','email','tid']
                // }],
            });
        // } 
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getDiskusiById = async (req, res) => {
    try {
        const diskusi = await Diskusi.findOne({
            where:{
                did: req.params.id
            }
        });

        if (!diskusi) {
            return res.status(404).json({message: "Diskusi tidak ditemukan"});
        }
        // let count = diskusi.total_lihat + 1;
        // await diskusi.update(
        //     {
        //         total_lihat: count
        //     },
        //     {
        //         where: {
        //             did: diskusi.did
        //         }
        //     });

        let response;
        // if (req.role == 'rakyat') {
            response = await Diskusi.findOne({
                attributes: ['did','judul_diskusi','isi_diskusi','total_lihat','createdAt','updatedAt'],
                where: {
                    did: diskusi.did
                },
                // include:[{
                //     model: Users,Topic
                //     attributes:['nama','username','email','tid']
                // }]
            })
        // } else {
        //     return res.status(404).json({message: "Pemerintah tidak dapat melihat judul diskusi"})            
        // }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createDiskusi = async (req, res) => {
    const {judul_diskusi, isi_diskusi, topicId} = req.body;
    try {
        await Diskusi.create({
            judul_diskusi: judul_diskusi,
            isi_diskusi: isi_diskusi,
            // userId: req.uid,
             topicId: topicId
            // topicId: req.tid
        });
        res.status(201).json({message: "Berhasil membuat diskusi baru"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const editDiskusi = async (req, res) => {
    try {
        const diskusi = await Diskusi.findOne({
            where: {
                did: req.params.id
            }
        });
        
        if (!diskusi) {
            return res.status(404).json({message: "Diskusi tidak ditemukan"});
        }

        const {judul_diskusi, isi_diskusi} = req.body;
        
        // if (req.role == 'rakyat') {
        //     if (req.uid === diskusi.userId) {
            await Diskusi.update(
                {
                    judul_diskusi: judul_diskusi,
                    isi_diskusi: isi_diskusi
                },
                { where:{
                    did: diskusi.did
                    // [Op.and]: [{did: diskusi.did}, {userId: req.uid}]
                    }
                });
        //     } else {
        //         return res.status(403).json({message: "Harus login dengan email dan username yang sesuai"});
        //     }
        // } else {
        //     return res.status(404).json({message: "Pemerintah tidak dapat mengupdate judul diskusi"})
        // }

        res.status(200).json({message: "Berhasil mengedit diskusi"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteDiskusi = async (req, res) => {
    try {
        const diskusi = await Diskusi.findOne({
            where: {
                did: req.params.id
            }
        });

        if (!diskusi) {
            return res.status(404).json({message: "Diskusi tidak ditemukan"});
        }

        // if (req.role === "rakyat") {
        //     if (req.uid === diskusi.userId) {
                await Diskusi.destroy({ 
                    where:{
                        did: diskusi.did
                        // [Op.and]: [{did: diskusi.did}, {userId: req.uid}]
                    }
                });
        //     } else {
        //         return res.status(403).json({message: "Harus login dengan email dan username yang sesuai"});
        //     }       
        // }

        res.status(200).json({message: "Berhasil menghapus diskusi"});
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
}
