import { Paper } from '@mui/material';
import AddDiaglog from './components/AddDiaglog';
import Header from './components/Header';
import Project from './components/Project';
import { createProject, deleteProject, getProject } from './service/project';
import { createTask, deleteTask, updateTask } from './service/task';
import React, {useEffect, useState} from 'react'
import SnackBar from './components/SnackBar';

export default function App() {
  const [data, setData] = useState(null);
  const [snack, setSnack] = React.useState(false);
  useEffect(()=>{
    const fetchData = async()=>{
      try {
      const projects = await getProject();
      setData(projects)
      } catch (error) {
        setSnack(true)
      }
    }
    fetchData()
  },[])
  const [open, setOpen] = useState(false); // Dialog status
  const [item, setItem] = useState(""); //Dialog-Type Project or Task
  const [pid, setPid] = useState(null); //Current project
  const handleClose = () => {
    setOpen(false);
    setPid(null);
  }
  const addProject = () => {
    setItem("Project")
    setOpen(true)
  }
  const addTask = (pid) => {
    setItem("Task")
    setPid(pid);
    setOpen(true)
  }
  const onNewTask = async (event) => {
    try {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const newTask = await createTask(pid, formJson);
    const pIndex = data.findIndex((proj)=> proj._id === pid)
    data[pIndex].tasks = [...data[pIndex].tasks, newTask];
    setData([...data])
    handleClose();
    } catch (error) {
      setSnack(true)
    }
  }
  const onNewProject = async (event) => {
    try {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const newProject = await createProject(formJson);
    setData([...data, newProject]);
    handleClose();
    } catch (error) {
      setSnack(true)
    }
  }
  const delProject = async(id) => {
    try {
    const deletedProject = await deleteProject(id);
    setData([...data.filter((item) => item._id !== deletedProject._id)]);
    } catch (error) {
      setSnack(true)
    }
  }
  const delTask = async(id) => {
    try {
    const deletedTask = await deleteTask(id);
    const pIndex = data.findIndex((proj)=> proj._id === deletedTask.project)
    data[pIndex].tasks = data[pIndex].tasks.filter((item)=> item._id !== deletedTask._id);
    setData([...data])
    } catch (error) {
      setSnack(true)
    }
  }
  const editTask = async(id, body) => {
    try {
    const editedTask = await updateTask(id, body);
    const pIndex = data.findIndex((proj)=> proj._id === editedTask.project)
    data[pIndex].tasks = data[pIndex].tasks.map((item)=> item._id === editedTask._id ? editedTask : item);
    setData([...data])
    } catch (error) {
      setSnack(true)
    }
  }

  return (
    <Paper elevation={6}>
      <Header addProject={addProject}/>
      {data?.length && data.map((proj)=>
        <Project 
          project={proj} 
          key={proj._id} 
          addTask={addTask} 
          delProject={delProject}
          delTask={delTask}
          editTask={editTask}
        />)}
      <AddDiaglog open={open} handleClose={handleClose} item={item}
        onSubmit={item === 'Project'? onNewProject: onNewTask}/>
      <SnackBar msg="Something went wrong!" snack={snack} setSnack={setSnack}/>
    </Paper>
  );
}
