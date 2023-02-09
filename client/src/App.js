
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { AuthProvider } from './context/Authcontext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
