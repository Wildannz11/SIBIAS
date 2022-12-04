// import Kebijakan from "../models/KebijakanModel.js";
// import Users from "../models/UserModel.js";
import { Users, Kebijakans } from "../associations/Association.js";
import { Op } from "sequelize";
import fs from "fs";

export const getKebijakan = async (req, res) => {
    try {
        let response;
        response = await Kebijakans.findAll({
            include:[{
                model: Users,
                attributes:['nama_lembaga','email']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getKebijakanById = async (req, res) => {
    try {
        const kebijakan = await Kebijakans.findOne({
            where:{
                kid: req.params.id
            }
        });

        if (!kebijakan) {
            return res.status(404).json({msg: "Judul Kebijakan tidak ditemukan"});
        }

        let tambah = kebijakan.jumlah_kunjungan + 1;
        await Kebijakans.update(
            {
            jumlah_kunjungan: tambah
            },
            {
                where: {
                    kid: kebijakan.kid
                }
            }
        );

        let response;
        response = await Kebijakans.findOne({
            attributes: ['kid','judul_kebijakan','isi_kebijakan','jumlah_kunjungan','sudah_publish'],
            where: {
                kid: kebijakan.kid
            },
            include:[{
                model: Users,
                attributes:['nama_lembaga','email']
            }],
             
        });
        
        req.kid = kebijakan.kid;
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createKebijakan = async (req, res) => {
    const {judul_kebijakan, isi_kebijakan} = req.body;
    try {
        await Kebijakans.create({
            judul_kebijakan: judul_kebijakan,
            isi_kebijakan: isi_kebijakan,
            userId: req.uid
        });
        res.status(201).json({msg: "Sukses membuat Kebijakan baru"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const editKebijakan = async (req, res) => {
    try {
        const kebijakan = await Kebijakans.findOne({
            where: {
                kid: req.params.id
            }
        });
        
        if (!kebijakan) {
            return res.status(404).json({msg: "Kebijakan tidak ditemukan"});
        }

        const {judul_kebijakan, isi_kebijakan} = req.body;
        if (req.role === "rakyat") {
            if (req.uid === kebijakan.userId) {
                await Kebijakans.update(
                    {
                        judul_kebijakan: judul_kebijakan,
                        isi_kebijakan: isi_kebijakan
                    },
                    { where:{
                        // id: Kebijakan.id
                        [Op.and]: [{kid: kebijakan.kid}, {userId: req.uid}]
                    }
                });
            } else {
                return res.status(403).json({msg: "Harus login dengan email dan username yang sesuai"});
            }       
        } else {
            return res.status(404).json({msg: "Pemerintah tidak dapat mengupdate judul Kebijakan"})
        }

        res.status(200).json({msg: "Sukses mengedit judul Kebijakan"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteKebijakan = async (req, res) => {
    try {
        const kebijakan = await Kebijakans.findOne({
            where: {
                kid: req.params.id
            }
        });

        if (!kebijakan) {
            return res.status(404).json({msg: "Kebijakan tidak ditemukan"});
        }

        if (req.role === "rakyat") {
            if (req.uid === kebijakan.userId) {
                const filepath = `../../public/images/kebijakan/${kebijakan.foto_data}`;
                fs.unlinkSync(filepath);

                await Kebijakans.destroy({ 
                    where:{
                        // id: Kebijakan.id
                        [Op.and]: [{kid: Kebijakan.kid}, {userId: req.uid}]
                    }
                });
            } else {
                return res.status(403).json({msg: "Harus login dengan email dan username yang sesuai"});
            }       
        }

        res.status(200).json({msg: "Sukses menghapus judul Kebijakan"});
    } catch (error) {
        res.status(500).json({msg: error.message}); 
    }
}

export const uploadImageKebijakanBaru = async (req, res) => {
    if(req.files === null || req.files === undefined) {
        return res.status(400).json({msg: "Tidak ada file photo, silahkan pilih foto terlebih dahulu"});
    };

    const file = req.files.fotokebijakan;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/kebijakan/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];
    
    if(!allowedType.includes(ext.toLowerCase())) {
        return res.status(422).json({msg: "Foto yang anda masukkan tidak valid"});
    }

    if(fileSize > 50000000) {
        return res.status(422).json({msg: "Ukuran foto harus kurang dari 50 MB"})
    }

    file.mv(`../../public/images/kebijakan/${fileName}`, async(err) => {
        if(err){
            return res.status(500).json({msg: err.message});
        }
        try {
            await Kebijakans.create({foto_data: fileName, foto_url: url});
            res.status(201).json({msg: "Sukses mengupload foto untuk kebijakan"});
        } catch (error) {
            console.log(error.message);
            res.status(400).json({msg: error.message});
        }
    })
}

export const editUploadImageKebijakan = async (req, res) => {
    const kebijakan = await Kebijakan.findOne({
        where: {
            kid: req.params.id
        }
    });

    if (!kebijakan) {
        return res.status(404).json({msg: "Tidak ditemukan user, harap login terlebih dahulu"});
    }

    let fileName = "";
    if(req.files === null || req.files === undefined) {
        fileName = kebijakan.foto_data;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) {
            return res.status(422).json({msg: "Foto yang anda masukkan tidak valid"});
        }

        if(fileSize > 50000000) {
            return res.status(422).json({msg: "Ukuran foto harus kurang dari 50 MB"});
        }

        // const filepath = `./public/images/${product.image}`;
        const filepath = `../../public/images/kebijakan/${kebijakan.foto_data}`;
        fs.unlinkSync(filepath);

        file.mv(`../../public/images/kebijakan/${fileName}`, (err)=>{
            if(err) {
                return res.status(500).json({msg: err.message})
            };
        });
    }
    // const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/kebijakan/${fileName}`;
    
    try {
        await Kebijakans.update(
            { foto_data: fileName, foto_url: url },
            { where: { id: req.params.id } }
        );
        res.status(200).json({msg: "Sukses mengupdate foto kebijakan"});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg: error.message});
    }
}

export const publishKebijakan = async (req, res) => {
    try {
        const kebijakan = await Kebijakan.findOne({
            where: {
                kid: req.params.id
            }
        })

        if (!kebijakan) {
            return res.status(404).json({msg: "Kebijakan tidak ditemukan"});
        }

        await Kebijakans.update(
            { sudah_publish: true },
            { where: {
                kid: kebijakan.kid
            }}
        );
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg: error.message});
    }
}