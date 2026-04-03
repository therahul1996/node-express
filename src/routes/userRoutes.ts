import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/userController";


const router = Router();
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management APIs
 *
 * /api/users:
 *   post:
 *     summary: Post user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
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
 * /api/users/{id}:
 *   patch:
 *     summary: Update user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       201:
 *         description: Update user successfully
 *       400:
 *         description: Invalid credentials
 */
// router.put('/:id', updateUser);
router.patch('/:id', updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by Id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get user by Id
 */
router.get('/:id', getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete users
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete user
 */
router.delete('/:id', deleteUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/', getAllUsers);

export default router;

