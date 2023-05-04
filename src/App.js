import './App.css';
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CreatePost } from './components/CreatePost';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import Navbar from './components/Navbar';
import { AuthFlagContext } from './components/providers/AuthFlagProvider';


function App() {
  const { isAuth, setIsAuth } = useContext(AuthFlagContext);

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />} isAuth={isAuth}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
