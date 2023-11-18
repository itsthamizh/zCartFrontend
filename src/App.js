import Login from './components/session/Login';
import Layout from './components/home/Layout';
import { Routes, Route, Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import ListAllUsers from './components/users/ListAllUsers';
import UserRegistration from './components/users/UserRegistration';
import Sidebar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
import ListAllCatagory from './components/category/ListAllCatagory';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}


function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <TopBar />
          <Sidebar/>
          <div className="content">
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/login" element={<Login />} />
                <Route path='/list-all-users' element={<ListAllUsers/>}/>
                <Route path='/registration' element={<UserRegistration/>}/>
                <Route path='/list-all-catagory' element={<ListAllCatagory/>}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
