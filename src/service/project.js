import Axios from './Axios'
export const getProject = async ()=>{
    const projectData = await Axios.get('/project');
    return projectData.data;
}
export const createProject = async (body)=>{
    const projectData = await Axios.post('/project', body);
    return projectData.data;
}
export const deleteProject = async (id)=>{
    const projectData = await Axios.delete(`/project/${id}`);
    return projectData.data;
}