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
        api.post('/createOrder', {
            restaurant_id: item.restaurant_id,
            status: "open",
            dishes: [{ id: item.id }]
        })
            .then(response => {
                console.log(response)
                if (response.status === 201) {
                    AlertToast("Item adicionado ao carrinho!", "OK");
                } else {
                    AlertToast("Faça login para adicionar itens ao carrinho.", "OK");
                }
            })
            .catch(error => {
                AlertToast("Faça login para adicionar itens ao carrinho.", "OK");
            });
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