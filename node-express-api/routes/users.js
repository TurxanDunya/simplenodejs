import express from 'express';

import { getById, getUsers, createUser, deleteById, patchById } from '../controllers/users.js';

const router = express.Router();

//all routes in here are starting with /users because of we defined in index.js
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getById);

router.delete('/:id', deleteById);

router.patch('/:id', patchById);

export default router;