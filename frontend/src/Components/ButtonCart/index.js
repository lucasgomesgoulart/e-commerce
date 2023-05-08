import api from "../../api";
import { useContext } from 'react';
import { Context } from '../../Context/AuthProvider';
import AlertToast from '../AlertToast';
import { BsFillCartPlusFill } from "react-icons/bs";
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
                // console.log(response)
                if (response.status === 201) {
                    AlertToast("Item adicionado ao carrinho!");
                } else {
                    AlertToast("Faça login para adicionar itens ao carrinho.");
                }
            })
            .catch(error => {
                AlertToast("Faça login para adicionar itens ao carrinho.", 'error');
            });
    }

    return (
        <button className="button-carrinho" onClick={addToCart}>
            <span>
                <a href="#">{<BsFillCartPlusFill />}</a>
            </span>
            Adicionar ao carrinho
        </button>
    )
}

export default ButtonCart;