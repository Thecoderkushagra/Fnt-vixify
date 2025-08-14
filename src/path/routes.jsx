import { Routes, Route } from 'react-router-dom';
import Log from '../templates/Log';
import Home from '../templates/Home';
import Otp from '../templates/Otp';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Log />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/varify" element={<Otp/>} />     
    </Routes>
  );
};

export default AppRoutes;