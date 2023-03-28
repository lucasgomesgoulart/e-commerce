import { ShoppingCartOutlined } from '@ant-design/icons';
import api from "../../api";
import { useContext, useEffect } from 'react';
import { Context } from '../../Context/AuthProvider';

// async function addCart(item) {
//     const dishInCard = await api.post('/createOrder', 
//     //fazer{
// }

const ButtonCart = (item) => {
    const { authenticated, setAuthenticated } = useContext(Context);
    


    return (
        <button className="button-carrinho" onClick={() => {
            // addCart(item)
        }}>
            <span>
                <a href="#">{<ShoppingCartOutlined />}</a>
            </span>
            Adicionar ao carrinho
        </button>
    )
}

export default ButtonCart;