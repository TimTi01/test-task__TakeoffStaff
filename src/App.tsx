import { Container } from '@mui/material';
import React from 'react';
import Bar from './Components/Bar';
import LoginForm from './Components/LoginForm';
import { Main } from './Components/Main';

function App() {
  return (
    <Container>
      <Bar/>
      <Main>
        <LoginForm/>
      </Main>
    </Container>
  );
}

export default App;