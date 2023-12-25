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
// import LoginLayout from './components/session/LoginLayout';


function LoginLayout({ children }) {
  return (
    <div className="login-layout">
      {children}
    </div>
  );
}


function App() {

  const isAuthenticated = localStorage.getItem('token') ?? false;
  
  return (
    <BrowserRouter>
    
    <div className="app">
         {isAuthenticated ? (
          <>
          <div className="app">
            <TopBar />
            <Sidebar />
            <div className="content">
              <Routes>
              <Route path="/" exact element={<Layout />} />
              <Route path="/login" element={
                  <LoginLayout>
                      <Login />
                  </LoginLayout>} />
              </Routes>

              <ProtectedRouter isAuthenticated={isAuthenticated}>
                <Route path="/list-all-users" element={<ListAllUsers />} />
                <Route path="/registration" element={<UserRegistration />} />
                <Route path="/list-all-catagory" element={<ListAllCatagory />} />
                <Route path="/list-all-product" element={<ListAllProducts />} />
                <Route path="/add-category" element={<AddCategory />} />
                <Route path="/add-product" element={<AddProduct />} />
              </ProtectedRouter>
            </div>
          </div>
          </>
        ) : (
          <Login />
        )}
      </div>        
    </BrowserRouter>
  );
}

export default App;
