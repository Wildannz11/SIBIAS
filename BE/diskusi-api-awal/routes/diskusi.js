const express = require('express');
const Validator = require('fastest-validator');
const router = express.Router();

const { Diskusi } = require('../models');

const v = new Validator();

// get diskusi

router.get('/', async(req, res) => {
 const diskusi = await Diskusi.findAll();
 return res.json(diskusi);
});

// get diskusi by id

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const diskusi = await Diskusi.findByPk(id);
    return res.json(diskusi || {});
   });

// create diskusi
router.post('/', async(req, res) => {
    
    const schema = {
        judul_diskusi: 'string',
        isi_diskusi: 'string'
    }
    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res
          .status(400)
          .json(validate);
    }

    const diskusi = await Diskusi.create(req.body);

    res.status(201).json(diskusi);

});

// edit by id

router.put('/:id', async(req, res) => {
  const id = req.params.id;

  const diskusi = await Diskusi.findByPk(id);

  if (!diskusi) {
    return res.json({ message: 'diskusi not found'});
  }
    const schema = {
        judul_diskusi: 'string|optional',
        isi_diskusi: 'string|optional'
    }
    const validate = v.validate(req.body, schema);

    if(validate.length) {
        return res
        .status(400)
        .json(validate);
    }
   diskusi.update(req.body);
   res.status(200).json({message: 'diskusi berhasil di edit', diskusi});
});

router.delete('/:id', async(req, res) => {
    const id = req.params.id;

    const diskusi = await Diskusi.findByPk(id);

    if (!diskusi) {
        return res.json({ message: 'diskusi not found'});
    }
    await diskusi.destroy();
    res.json({message: ' diskusi telah di hapus'})
})

module.exports = router;
