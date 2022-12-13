
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import Landing from './components/Landing';
import jwtDecode from 'jwt-decode';
import Login from './components/Login';
import Home from './container/Home';
function App() {

  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState(null);
  console.log("Login User variable in APP.JS", loginUser)

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      console.log("Data after jwtDecode", user);
      setLoginUser(user);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, [navigate])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<Home loginUser = {loginUser && loginUser} />} />
    </Routes>
  );
}


export default App;
