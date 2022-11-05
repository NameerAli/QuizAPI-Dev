import express from "express"
import { update, deleteUser, getUser } from "../controllers/user_controller.js";
import { verifyToken } from "../verifyToken.js";



const router = express.Router();

router.put("/:id", verifyToken, update);
router.delete("/:id",verifyToken, deleteUser);
router.get("/find/:id", getUser);




export default router;