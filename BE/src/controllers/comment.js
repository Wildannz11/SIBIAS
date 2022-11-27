import Comment_diskusi from "../models/commentModels.js";
import { Op } from "sequelize";

export const getComment_diskusi = async (req, res) => {
    try {
        let response;
            response = await Comment_diskusi.findAll({
                attributes: ['cid','isi_comment','updatedAt'],
                // include:[{
                //     model: Users, Diskusi,
                //     attributes:['nama','username','email','id']
                // }],
            });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getComment_diskusiById = async (req, res) => {
    try {
        const comment_diskusi = await Comment_diskusi.findOne({
            where:{
                cid: req.params.id
            }
        });

        if (!comment_diskusi) {
            return res.status(404).json({message: "Comment tidak ditemukan"});
        }

        let response;
            response = await Comment_diskusi.findOne({
                attributes: ['cid','isi_comment','updatedAt'],
                where: {
                    cid: comment_diskusi.cid
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

export const createComment_diskusi = async (req, res) => {
    const {isi_comment} = req.body;
    try {
        await Comment_diskusi.create({
            isi_comment: isi_comment,
            // userId: req.uid,
            //  diskusiId: req.did
        });
        res.status(201).json({message: "Berhasil membuat Comment baru"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const editComment_diskusi = async (req, res) => {
    try {
        const comment_diskusi = await Comment_diskusi.findOne({
            where: {
                cid: req.params.id
            }
        });
        
        if (!comment_diskusi) {
            return res.status(404).json({message: "Comment tidak ditemukan"});
        }

        const {isi_comment} = req.body;
        
            // if (req.uid === comment_diskusi.userId) {
            await Comment_diskusi.update(
                {
                    isi_comment: isi_comment
                },
                { where:{
                    cid: comment_diskusi.cid
                    // [Op.and]: [{cid: comment_diskusi.cid}, {userId: req.uid}]
                    }
                });
            // } else {
            //     return res.status(403).json({message: "Harus login dengan email dan username yang sesuai"});
            // }
        res.status(200).json({message: "Berhasil mengedit Comment"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteComment_diskusi = async (req, res) => {
    try {
        const comment_diskusi = await Comment_diskusi.findOne({
            where: {
                cid: req.params.id
            }
        });

        if (!comment_diskusi) {
            return res.status(404).json({message: "Comment tidak ditemukan"});
        }

            // if (req.uid === comment_diskusi.userId) {
                await Comment_diskusi.destroy({ 
                    where:{
                        cid: comment_diskusi.cid
                        // [Op.and]: [{did: Comment_diskusi.did}, {userId: req.uid}]
                    }
                });
            // } else {
            //     return res.status(403).json({message: "Harus login dengan email dan username yang sesuai"});
            // }       
        res.status(200).json({message: "Berhasil menghapus Comment"});
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
}
