import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controllers/userController";


const router = Router();
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Post user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       201:
 *         description: Create user
 */
router.post('/', createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/', getUser);

/**
 * @swagger
 * /api/users/{id}:
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
 * /api/users:
 *   delete:
 *     summary: Delete users
 *     responses:
 *       200:
 *         description: Delete user
 */
router.delete('/:id', deleteUser);

export default router;

