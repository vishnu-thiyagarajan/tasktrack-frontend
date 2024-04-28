import Axios from './Axios'
export const createTask = async (pid, body)=>{
    const taskData = await Axios.post(`/task/${pid}`, body);
    return taskData.data;
}
export const updateTask = async (id, body)=>{
    const taskData = await Axios.put(`/task/${id}`, body);
    return taskData.data;
}
export const deleteTask = async (id)=>{
    const taskData = await Axios.delete(`/task/${id}`);
    return taskData.data;
}