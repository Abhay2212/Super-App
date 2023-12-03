import React from 'react'
import { useNavigate } from "react-router-dom";
import Login from '../../Components/Login/Login';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (localStorage.getItem('user')) {
      navigate('/category');
    }
  };

  return (
    <div>
      <Login handleSubmit={handleSubmit} />
    </div>
  );
}

export default LoginPage