import Login from './components/session/Login';
import Layout from './components/home/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRouter from './hooks/ProtectedRouter';
import ListAllUsers from './components/users/ListAllUsers';
import UserRegistration from './components/users/UserRegistration';
import Sidebar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
import ListAllCatagory from './components/category/ListAllCatagory';
import ListAllProducts from './components/product/ListAllProducts';
import AddCategory from './components/category/AddCategory';
import AddProduct from './components/product/AddProduct';


// const ROLES = {
//   'User': 2001,
//   'Editor': 1984,
//   'Admin': 5150
// }


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <TopBar />
        <Sidebar />
        <div className="content">

          <Routes>
            <Route path="/" exact element={<Layout/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<ProtectedRouter />} />
          </Routes>
          
          <ProtectedRouter>
              <Route path="/list-all-users" element={<ListAllUsers />} />
              <Route path="/registration" element={<UserRegistration />} />
              <Route path="/list-all-catagory" element={<ListAllCatagory />} />
              <Route path="/list-all-product" element={<ListAllProducts />} />
              <Route path="/add-category" element={<AddCategory />} />
              <Route path="/add-product" element={<AddProduct />} />
          </ProtectedRouter>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
