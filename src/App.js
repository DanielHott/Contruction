import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Create from './pages/CreateAccount';
import Expense from './pages/Expense';
import Constructions from './pages/Constructions';
import LoginContext from './context/UseLogin';

function App() {
  return (
      <LoginContext>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/create-account" element={ <Create /> } />
          <Route path="/expense" element={ <Expense /> } />
          <Route path="/constructions" element={ <Constructions /> } />
        </Routes>
      </LoginContext>

  );
}

export default App;
