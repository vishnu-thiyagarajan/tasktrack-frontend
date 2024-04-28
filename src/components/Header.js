import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Header(props) {
  const {addProject} = props;
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{padding: 2}}>
        <Typography variant="h4" component="div">
            PROJECTS
        </Typography>
        <Button variant="contained"  onClick={addProject}>
            +New
        </Button>
    </Stack>
  )
}
