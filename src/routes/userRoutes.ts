import { Router } from "express";
import { createUser, DeleteUser, GetAllUser, UpdateUser } from "../controllers/userController";


const router = Router();

router.post('/', createUser);
router.get('/', GetAllUser);
router.put('/:id', UpdateUser);
router.delete('/:id', DeleteUser);

export default router;