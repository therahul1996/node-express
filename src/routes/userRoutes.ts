import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controllers/userController";


const router = Router();
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Post user
 *     responses:
 *       201:
 *         description:Create user
 */
router.post('/', createUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/', getUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User updated
 */
router.put('/:id', updateUser);

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Delete users
 *     responses:
 *       200:
 *         description: Delete user
 */
router.delete('/:id', deleteUser);

export default router;

