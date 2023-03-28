import { Route, Routes } from 'react-router-dom';
import Home from '../Screens/Home';
import Register from '../Screens/Register';
import Restaurantes from '../Screens/Restaurantes';
import { Context } from '../Context/AuthProvider';
import { useContext } from 'react';
import RestaurantDetails from '../Screens/RestaurantDetails';
const Rotas = () => {

  const { authenticated } = useContext(Context)


  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/restaurantes" element={<Restaurantes />} />
      <Route path="/register" element={<Register />} />
      <Route path="/restaurantes/:id/pratos" element={<RestaurantDetails />} />
      <Route path="/login" element={authenticated ? <Home /> : <Register />} />
    </Routes>
  );
};

export default Rotas;
