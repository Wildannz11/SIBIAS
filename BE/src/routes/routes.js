import express from "express";
import {
    getDiskusi,
    getDiskusiById,
    createDiskusi,
    editDiskusi,
    deleteDiskusi
} from "../controllers/diskusi.js";
import {
    getTopic,
    getTopicById,
    createTopic,
    editTopic,
    deleteTopic
} from "../controllers/topic.js";
import {
    getComment_diskusi,
    getComment_diskusiById,
    createComment_diskusi,
    editComment_diskusi,
    deleteComment_diskusi
} from "../controllers/comment.js";

const router = express.Router();
// crud diskusi
router.get('/diskusi', getDiskusi);
router.get('/diskusi/:id', getDiskusiById);
router.post('/diskusi', createDiskusi);
router.put('/diskusi/:id', editDiskusi);
router.delete('/diskusi/:id', deleteDiskusi);

// crud topic
router.get('/topic', getTopic);
router.get('/topic/:id', getTopicById);
router.post('/topic', createTopic);
router.put('/topic/:id', editTopic);
router.delete('/topic/:id', deleteTopic);

// crud comment
router.get('/comment', getComment_diskusi);
router.get('/comment/:id', getComment_diskusiById);
router.post('/comment', createComment_diskusi);
router.put('/comment/:id', editComment_diskusi);
router.delete('/comment/:id', deleteComment_diskusi);

export default router;