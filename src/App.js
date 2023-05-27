import React from 'react';
import Home from './components/Home';
import FormContainer from './components/FormContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormContainer />}/> 
          <Route path="/home" element={<Home />}/> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
