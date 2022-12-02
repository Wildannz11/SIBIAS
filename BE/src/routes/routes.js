import express from "express";

import {
    loginPemerintah, 
    login, 
    logout, 
    statusLoginPemerintah, 
    statusLoginUser
} from "../controllers/Auth.js";

import {
    createTags,
    createTagsKebijakan,
    getTags,
    getTagsById,
    editTags,
    editTagsKebijakan,
    deleteTags,
    deleteTagsKebijakan
} from "../controllers/Tags.js";

import {
    createTopic,
    createTopicDiskusi,
    getTopic,
    getTopicById,
    editTopic,
    editTopicDiskusi,
    deleteTopic,
    deleteTopicDiskusi
} from "../controllers/Topic.js";

import {
    createChatDiskusi,
    editChatDiskusi,
    deleteChatDiskusi
} from "../controllers/ChatDiskusi.js";

import {
    getDiskusi,
    getDiskusiById,
    createDiskusi,
    editDiskusi,
    deleteDiskusi
} from "../controllers/Diskusi.js";

import {
    getKebijakan,
    getKebijakanById,
    createKebijakan,
    editKebijakan,
    deleteKebijakan,
    uploadImageKebijakanBaru,
    editUploadImageKebijakan,
    publishKebijakan
} from "../controllers/Kebijakan.js"

import {
    getUser,
    getPemerintah, 
    getUserById,
    getPemerintahById, 
    createUser,
    createAkunPemerintah, 
    editUser,
    editPemerintah, 
    deleteUser,
    uploadImageProfileBaru,
    editUploadImageProfile
} from "../controllers/Users.js"

import { verifyUser , rakyatOnly , pemerintahOnly } from "../middleware/AuthUser.js";

const router = express.Router();

// Authentication
router.get('/users/me', statusLoginUser);
router.get('/pemerintah/me', statusLoginPemerintah);

router.post('/users/login', login);
router.post('/pemerintah/login', loginPemerintah);

router.delete('/logout', logout);

// diskusi rakyat mengenai kebijakan
router.get('/diskusi', verifyUser, getDiskusi);
router.get('/diskusi/:id', verifyUser, getDiskusiById);
router.post('/diskusi', verifyUser, rakyatOnly, createDiskusi);
router.patch('/diskusi/:id', verifyUser, rakyatOnly, editDiskusi);
router.delete('/diskusi/:id', verifyUser, rakyatOnly, deleteDiskusi);

// CUD chat diskusi
router.post('/chatdiskusi', verifyUser, rakyatOnly, createChatDiskusi);
router.patch('/chatdiskusi/:id', verifyUser, rakyatOnly, editChatDiskusi);
router.delete('/chatdiskusi/:id', verifyUser, rakyatOnly, deleteChatDiskusi);

// CRUD topic
router.post('/topic', verifyUser, rakyatOnly, createTopic);
router.post('/topicdiskusi', verifyUser, rakyatOnly, createTopicDiskusi);
router.get('/topic', verifyUser, getTopic);
router.get('/topic/:id', verifyUser, getTopicById);
router.patch('/topic/:id', verifyUser, rakyatOnly, editTopic);
router.patch('/topicdiskusi/:id', verifyUser, rakyatOnly, editTopicDiskusi);
router.delete('/topic/:id', verifyUser, rakyatOnly, deleteTopic);
router.delete('/topicdiskusi/:id', verifyUser, rakyatOnly, deleteTopicDiskusi);

// CRUD pemerintah kebijakan
router.get('/kebijakan', verifyUser, getKebijakan);
router.get('/kebijakan/:id', verifyUser, getKebijakanById);
router.post('/kebijakan', verifyUser, pemerintahOnly, createKebijakan);
router.patch('/kebijakan/:id', verifyUser, pemerintahOnly, editKebijakan);
router.delete('/kebijakan/:id', verifyUser, pemerintahOnly, deleteKebijakan);

router.post('/images/kebijakan', verifyUser, uploadImageKebijakanBaru);
router.patch('/images/kebijakan/:id', verifyUser, editUploadImageKebijakan);
router.patch('/kebijakan/publish', verifyUser, publishKebijakan);

// CRUD tags
router.post('/tags', verifyUser, createTags);
router.post('/tagskebijakan', verifyUser, createTagsKebijakan);

router.get('/tags', verifyUser, getTags);
router.get('/tags/:id', verifyUser, rakyatOnly, getTagsById);

router.patch('/tags/:id', verifyUser, rakyatOnly, editTags);
router.patch('/tagskebijakan/:id', verifyUser, rakyatOnly, editTagsKebijakan);

router.delete('/tags/:id', verifyUser, rakyatOnly, deleteTags);
router.delete('/tagskebijakan/:id', verifyUser, rakyatOnly, deleteTagsKebijakan);


// CRUD Users
router.get('/users/:role', verifyUser, rakyatOnly, getUser);
router.get('/pemerintah/:role', verifyUser, pemerintahOnly, getPemerintah);

router.get('/users/:role/:id', verifyUser, rakyatOnly, getUserById);
router.get('/pemerintah/:role/:id', verifyUser, pemerintahOnly, getPemerintahById);

router.post('/users', createUser);
router.post('/pemerintah', createAkunPemerintah);

router.patch('/users/:id',  verifyUser, rakyatOnly, editUser);
router.patch('/pemerintah/:id',  verifyUser, pemerintahOnly, editPemerintah);

router.delete('/users/:id',  verifyUser, deleteUser);

// Image user
router.post('/images/users', verifyUser, uploadImageProfileBaru);
router.patch('/images/users/:id', verifyUser, editUploadImageProfile);



export default router;