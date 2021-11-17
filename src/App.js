import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import './App.css';

// Project imports
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate replace to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate replace to="/" />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
