import express from 'express';
const router = express.Router();
import { createUser, getUser, getUsers, deleteUser, updateUser } from '../app/controllers/users.js';

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
