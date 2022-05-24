import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();


// All routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser)

router.get('/:id', getUserById)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;