import React from 'react'
import Dashboard from '../../Components/Dashboard/Dashboard'
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate(); 

  const dashboardredirection = () => {
    navigate('/movies');
  };

  return (
    <div>
      <Dashboard onBrowse={dashboardredirection}/>
    </div>
  );
}

export default Main