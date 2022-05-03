import React from 'react'
import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function LoginForm() {
  return (
    <Box component="form">
      <FormControl>
        <Typography paragraph gutterBottom variant='h5' align='center'>
          Please login
        </Typography>
        <TextField required
                  fullWidth
                  margin='dense'
                  id='email'
                  label='Email Address'
                  type='email'
                  defaultValue='test@mail.com'
                  variant='outlined'
        />
        <TextField required
                  fullWidth
                  margin='dense'
                  id='password'
                  label='Password Address'
                  type='password'
                  variant='outlined'
        />
        <Button variant='contained'>
          Login
        </Button>
      </FormControl>
    </Box>
  )
}
