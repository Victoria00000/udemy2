import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/chat-app/login' element={<Login />} />
          <Route path='/chat-app/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
