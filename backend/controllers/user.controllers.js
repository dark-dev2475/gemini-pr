import userModel from '../models/user.model.js';
import userServices from '../services/userServices.js';
import { validationResult } from 'express-validator';
export const createUser=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()});
    }

    try {
        const user=await userServices.createUser(req.body);
        const token = await userModel.generateJWT(user);
        return res.status(201).json({user,token});
    }
    catch (error) {
        return res.status(500).json({message:error.message});
    }
}