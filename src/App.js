import Login from './components/Login';
import Layout from './components/Layout';
import { Routes, Route, Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import ListAllUsers from './components/users/ListAllUsers';
import UserRegistration from './components/users/UserRegistration';
import Sidebar from './components/sideBar/SideBar';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}


function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Sidebar/>
          <div className="content">
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/login" element={<Login />} />
                <Route path='/list-all-users' element={<ListAllUsers/>}/>
                <Route path='/registration' element={<UserRegistration/>}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
