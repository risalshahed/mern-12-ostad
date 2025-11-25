/* 
  This user.routes.js
    - Only define routes
    - No logic
    - No Controller Call
*/

import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";

const router = Router();

// GET ALL Users
router.get('/', getUsers);

// Create New User
router.post('/', createUser);

// export the router
export default router;