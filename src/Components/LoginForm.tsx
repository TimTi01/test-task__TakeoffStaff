import React, { useEffect } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { IFormInput } from '../Types/FormInputTypes'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setAuthUser } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
})

export default function LoginForm() {
  const auth = useAppSelector(state => state.authReducer.authorization)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (auth) {
      navigate('contacts')
    }
  }, [auth])

  const {control, handleSubmit, formState: { errors }} = useForm<IFormInput>({
    resolver: yupResolver(schema)
  })

  const formSubmitHandler: SubmitHandler<IFormInput> = (data) => {
    if (!errors.password && !errors.email) {
      dispatch(setAuthUser(true))
    } else {
      dispatch(setAuthUser(false))
    }
  };

  return (
    <Box component="form"
         noValidate
         autoComplete='off'
         onSubmit={handleSubmit(formSubmitHandler)}
    >
      <FormControl>
        <Typography paragraph gutterBottom variant='h5' align='center'>
          Please login
        </Typography>
        <Controller name='email' 
                    control={control} 
                    defaultValue='test@mail.com'
                    render={({ field }) => (
                      <TextField  
                              {...field}
                              required
                              fullWidth
                              id='email'
                              label='Email'
                              type='email'
                              variant='outlined'
                              margin='dense'
                              error={!!errors.email}
                              helperText={errors.email ? errors.email?.message : ''}
                      />
                    )}
        />
        <Controller name='password' 
                    control={control}
                    defaultValue="" 
                    render={({ field }) => (
                      <TextField  
                              {...field}
                              type="password"
                              label="Password"
                              variant="outlined"
                              error={!!errors.password}
                              helperText={errors.password ? errors.password?.message : ''}
                              fullWidth
                              margin="dense"
                      />
                    )}
        />
        <Button type='submit' 
                variant='contained'
        >
          Login
        </Button>
      </FormControl>
    </Box>
  )
}
