import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/DeleteOutline'
import Tooltip from '@mui/material/Tooltip';
import React from 'react'

export default function Task(props) {
  const {task, delTask, editTask} = props;
  const {_id: id, name, status} = task;
  const removeTask = () => delTask(id);
  const updateStatus = ()=>{
    if (status === "Todo") editTask(id, {status: "Onit"})
    if (status === "Onit") editTask(id, {status: "Done"})
  }
  const reset = () => editTask(id, {status: "Todo"})
  const colorMap = {
    Todo: "primary",
    Onit: "warning",
    Done: "success"
  }
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{m: 1}}>
        <Typography variant="h6">
            {name}
            <Button size="small" onClick={removeTask}><DeleteIcon/></Button>
            </Typography>
            <Box>
            <Tooltip title={<>Click to next state<br/> Double click to reset</>}>
            <Chip color={colorMap[status]} label={status} size="small" sx={{m:1}} onClick={updateStatus} onDoubleClick={reset}/>
            </Tooltip>
            </Box>
        </Stack>
        <Divider component="li" />
    </>
  )
}
