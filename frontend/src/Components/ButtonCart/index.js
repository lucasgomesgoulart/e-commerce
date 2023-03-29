import { ShoppingCartOutlined } from '@ant-design/icons';
import api from "../../api";
import { useContext, useEffect } from 'react';
import { Context } from '../../Context/AuthProvider';
import AlertToast from '../AlertToast';

// async function addCart(item) {
//     const dishInCard = await api.post('/createOrder', 
//     //fazer{
// }

const ButtonCart = ({ item }) => {
    const { authenticated, setAuthenticated } = useContext(Context);

    const addToCart = () => {
        console.log(item);
        const dishToCart = api.post('/createOrder', {
            restaurant_id: item.restaurant_id,
            status: "open",
            dishes: [{ id: item.id }]
        })
        console.log(dishToCart)
        AlertToast("Adicionado ao carrinho", "com sucesso!", "success", "OK", "top-end");
    }

    return (
        <button className="button-carrinho" onClick={addToCart}>
            <span>
                <a href="#">{<ShoppingCartOutlined />}</a>
            </span>
            Adicionar ao carrinho
        </button>
    )
}

export default ButtonCart;