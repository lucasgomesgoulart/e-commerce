import { Route, Routes } from 'react-router-dom';
import Home from '../Screens/Home';
import Register from '../Screens/Register';
import Restaurants from '../Screens/Restaurants';
import { Context } from '../Context/AuthProvider';
import { useContext } from 'react';
import RestaurantDetails from '../Screens/RestaurantDetails';
import Cart from '../Screens/Cart';
const Rotas = () => {

  const { authenticated } = useContext(Context)


  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/restaurantes" element={<Restaurants />} />
      <Route path="/register" element={<Register />} />
      <Route path="/restaurantes/:id/pratos" element={<RestaurantDetails />} />
      <Route path="/login" element={authenticated ? <Home /> : <Register />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  );
};

export default Rotas;
