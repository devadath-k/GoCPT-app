import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './views/Landing';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import {AuthProvider} from './contexts/AuthContext';
import PrivateRoute from './routes/PrivateRoutes';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
