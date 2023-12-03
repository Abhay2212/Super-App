import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/LoginPage";
import Category from "./Pages/Category/CategoryPage";
import Main from "./Pages/Dashboard/MainPage";
import Movies from "./Pages/Movies/MoviesPage";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);
  
  return (
    <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
    </>
  );
}

export default App;
