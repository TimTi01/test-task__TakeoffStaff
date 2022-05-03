import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Bar() {
  return (
    <AppBar position='fixed'>
        <Toolbar>
        <Typography variant="h6" 
                    component="div" 
                    sx={{ flexGrow: 1 }}
        >
            Takeoff Staff
        </Typography>
        </Toolbar>
    </AppBar>
  )
}
