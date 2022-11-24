import express from "express";
import {loginPemerintah , 
    login, 
    logout, 
    statusLoginPemerintah, 
    statusLoginUser
    } from "../controllers/Auth.js";
// import {
//     getDiskusi,
//     getDiskusiById,
//     createDiskusi,
//     editDiskusi,
//     deleteDiskusi
// } from "../controllers/Diskusi.js";
import {
    getUser,
    getPemerintah, 
    getUserById,
    getPemerintahById, 
    createUser,
    createAkunPemerintah, 
    editUser,
    editPemerintah, 
    deleteUser
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
// router.get('/diskusi', getDiskusi);
// router.get('/diskusi/:id', getDiskusiById);
// router.post('/diskusi', createDiskusi);
// router.patch('/diskusi/:id', editDiskusi);
// router.delete('/diskusi/:id', deleteDiskusi);

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

export default router;