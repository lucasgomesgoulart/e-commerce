import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Screens/Home';
import Products from '../Screens/Products';

const Rotas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default Rotas;
