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

router.put(
    '/add-user',
    authMiddleWare.authUser,
    body('projectId')
        .notEmpty()
        .isString()
        .withMessage('ProjectId is required and must be a string'),
    body('users','*')
        .isArray({ min: 1 })
        .withMessage('Users must be a non-empty array')
        .custom((arr) => Array.isArray(arr) && arr.every((u) => typeof u === 'string'))
        .withMessage('Each user must be a string'),
    projectController.addUserToProject
);



export default router;