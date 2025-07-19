import projectModel from '../models/project.model.js';




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