import express from "express"
import { getBook, viewBooks } from "../controllers/book_controller.js";
import { verifyToken } from "../verifyToken.js";




const router = express.Router();

//router.put("/:id", verifyToken, update);
//router.delete("/:id",verifyToken, deleteUser);
router.get("/find/:id",verifyToken, getBook);
router.get("/find",verifyToken, viewBooks);




export default router;