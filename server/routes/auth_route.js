import express from "express"
import { register } from "../controllers/auth_controller.js";
import { login } from "../controllers/auth_controller.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.get("/user-Profile", usersController.userProfile);



export default router;