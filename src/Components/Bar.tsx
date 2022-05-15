import { useEffect } from 'react';
import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setAuthUser } from '../features/authSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

export default function Bar() {
  const auth = useAppSelector(state => state.authReducer.authorization)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth) {
      navigate('/')
    }
  }, [auth])

  return (
    <AppBar position='fixed'>
        <Toolbar>
          <Typography variant="h6" 
                      component="div" 
                      sx={{ flexGrow: 1 }}
          >
              Takeoff Staff
          </Typography>
          {
            auth && 
              <Button color="inherit"
                      onClick={() => dispatch(setAuthUser(false))}
              >
                Logout
              </Button> 
          }
        </Toolbar>
    </AppBar>
  )
}
