import Login from './components/Login';
import Layout from './components/Layout';
import { Routes, Route, Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
