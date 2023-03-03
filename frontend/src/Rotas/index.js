import { Route, Routes } from 'react-router-dom';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Restaurantes from '../Screens/Restaurantes';

const Rotas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/restaurantes" element={<Restaurantes />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Rotas;
