import React from 'react';
import { Container } from '@mui/material';
import Bar from './Components/Bar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Bar/>
      <Outlet/>
    </Container>
  );
}

export default App;