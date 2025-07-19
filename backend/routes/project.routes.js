import {Router} from "express";
import {body} from "express-validator";
import * as projectController from "../controllers/project.controller.js"; 

import  * as authMiddleWare from "../middleware/auth.middleware.js";
const router = Router();


router.post('/create',
    authMiddleWare.authUser,
       body('name').notEmpty().isString().withMessage('Name is required'),
        projectController.createProject
)

router.get('/all', authMiddleWare.authUser, projectController.getAllProjects);

export default router;