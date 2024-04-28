import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React from 'react'

export default function AddDiaglog(props) {
  const {handleClose, open, item, onSubmit, pid} = props;
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    PaperProps={{
      component: 'form',
      onSubmit: (event) => onSubmit(event, pid),
        }}
    >
    <DialogTitle>Create New {item}</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        required
        margin="dense"
        id="name"
        name="name"
        label="Name"
        type="text"
        fullWidth
        variant="outlined"
        inputProps={{ maxLength: 15 }}
      />
      {item === "Project" && <TextField
      fullWidth
      required
      margin="dense"
      id="description"
      name="description"
      label="Description"
      type="text"
      multiline
      rows={4}
      variant="outlined"
      inputProps={{ maxLength: 300 }}
      />}
    </DialogContent>
    <DialogActions>
      <Button variant="contained" onClick={handleClose}>Cancel</Button>
      <Button variant="contained" type="submit">Add {item}</Button>
    </DialogActions>
  </Dialog>
  )
}
