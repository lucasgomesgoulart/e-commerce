import { useEffect, useState } from 'react';
import api from '../../api';
import StatusCart from '../../Components/StatusCart';
import TableCart from '../../Components/TableCart';
import './styles.scss';



const Cart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function getItensCart() {
            const itens = await api.get('./getOrderAndDishes')
            const dishes = itens.data.map(item => item.Dishes.map(dish => dish))
            setCart(dishes.flat())
            return dishes;
        }
        getItensCart();
    }, []);

    return (
        <>
            <h1 className="title-cart">
                Tudo pronto para finalizar sua compra?
            </h1>
            <div className='containers'>
                <TableCart cart={cart} />
                <div>
                    <StatusCart />
                </div>
            </div>
        </>
    )
}

export default Cart;