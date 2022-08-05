import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Create from './pages/CreateAccount';
import LoginContext from './context/UseLogin';

function App() {
  return (
      <LoginContext>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/create-account" element={ <Create /> } />
        </Routes>
      </LoginContext>

  );
}

export default App;
