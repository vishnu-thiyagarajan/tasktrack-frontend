import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, List, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import Task from './Task';
import React from 'react'

const style = {
    py: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};

export default function Project(props) {
  const {project, addTask, delProject, delTask, editTask} = props;
  const {_id, name, description, tasks} = project;
  const pushTask = () => addTask(_id);
  const deleteProject = () => delProject(_id);
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5">{name}
          <br/>
          <Typography variant="body1">
          {description}
          </Typography>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={style}>
            {tasks.map((task)=><Task task={task} key={task._id} delTask={delTask} editTask={editTask}/>)}
          </List>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={pushTask}><AddIcon/>Task</Button>
          <Button onClick={deleteProject}><DeleteIcon/>Project</Button>
        </AccordionActions>
    </Accordion>
  )
}
