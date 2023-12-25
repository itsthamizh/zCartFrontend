import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../css/session/login.css';
import axios from '../../api/axios';
import { Navigate } from "react-router-dom";

const LOGIN_URL = '/signin';

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUser] = useState('');
  const [password, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { 
            'Content-Type': 'application/json' 
          },
        }
      );
      if (response.status === 200){
        alert("User Login Successfully..!")

        const accessToken = response?.data?.token;
        const roles = response?.data?.roles;
        localStorage.setItem('token', accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        // setAuth({ username, password, roles, accessToken });
        // setUser('');
        // setPwd('');
        // navigate(from, { replace: true });
        
        window.location.replace('/');
      }
      else {
        setErrMsg('Invalid Response');
        alert('Invalid Response');
      }

    } 
    catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
        alert('No Server Response');
      } 
      else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
        alert('Missing Username or Password');
      } 
      else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
        alert('Unauthorized');
      }
      else {
        setErrMsg('Login Failed');
        alert('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className='login-header'>
      <section>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form className='form-header' onSubmit={handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            ref={userRef}
            autoComplete='off'
            onChange={(e) => setUser(e.target.value)}
            value={username}
            required
          />
          <br />
          <br />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            required
          />
          <br />
          <br />
          <br />

          <button type="submit">Sign In</button>
          <br />
        </form>
        <p>
          Need an Account?<br />
          <span className='line'>
            <Link to='/register'>Sign Up</Link>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;