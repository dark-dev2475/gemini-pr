import projectModel from '../models/project.model.js';
import mongoose from 'mongoose';



export const createProject= async({
    name,
    userId
})=>{

    if(!name)
    {
        throw new Error('Name is required')
    }
    if(!userId){
        throw new Error('User is requiredd')
    }
    let project;
    try {
        project = await projectModel.create({
            name,
            users: [userId]
        });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
            throw new Error('Project name already exists');
        }
        throw error;
    }
    return project;
}

export const getAllProjectByUserIdd= async({userId})=>{
    if(!userId){
        throw new Error('User ID is required');
    }

    const allUserProjects=await projectModel.find({
        users: userId
    }).populate('users', 'name email');

    return allUserProjects
}


export const addUserToProject = async ({ projectId, users,userId }) => {
    if (!projectId) {
        throw new Error('Project ID is required');
    }
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error('Invalid Project ID');
    }
    if (!users || !Array.isArray(users) || users.length === 0) {
        throw new Error('Users must be a non-empty array');
    }
    for (const userId of users) {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error(`Invalid user ID: ${userId}`);
        }
    }
     if (!userId) {
        throw new Error('User ID to add project is required');
    }
//    console.log(userId);
    const project = await projectModel.findOne({
        _id: projectId,
        users: userId

    })
    console.log(project);

    if (!project) {
        throw new Error('Project not found or user is not part of the project');
    }

     const updatedProject=await projectModel.findOneAndUpdate(
        { _id: projectId },
        { $addToSet: { users: { $each: users } } },
        { new: true })

        return updatedProject;


}

export const getProjectById = async ({ projectId }) => {
    if (!projectId) {
        throw new Error("projectId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }

    const project = await projectModel.findOne({
        _id: projectId
    }).populate('users')

    return project;
}