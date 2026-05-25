import { Router } from "express";
import { generateConversation, generateText } from "../controllers/chatController";


const router = Router();

/**
 * @swagger
 * tags:
 *   name: AI
 *   description: AI management APIs
 *
 * /api/chat:
 *   post:
 *     summary: Post chat
 *     tags: [AI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Create Conversation
 */
router.post('/', generateConversation);


/**
 * @swagger
 * tags:
 *   name: AI
 *   description: AI management APIs
 *
 * /api/chat/{conversationId}/messages:
 *   post:
 *     summary: Add a message to a conversation
 *     tags: [AI]
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: string
 *         description: The conversation ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Chat message added
 */
router.post('/:conversationId/messages', generateText);


export default router;

