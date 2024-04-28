import { Snackbar } from '@mui/material'
import React from 'react'

export default function SnackBar(props) {
  const { snack, setSnack, msg } = props

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnack(false);
  };
  return (
    <Snackbar
        open={snack}
        autoHideDuration={3000}
        onClose={handleClose}
        message={msg}
      />
  )
}
