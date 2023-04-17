import { useEffect, useState } from 'react';
import api from '../../api';
import StatusCart from '../../Components/StatusCart';
import TableCart from '../../Components/TableCart';
import './styles.scss';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    const [randomValue, setRandomValue] = useState()

    const getRandomValue = () => {
        const min = 15;
        const max = 35;
        const step = 0.5;
        const range = (max - min) / step;
        const value = (Math.floor(Math.random() * range) * step + min).toFixed(2);
        setRandomValue(value)
    };

    const getItensCart = async () => {
        setLoading(true);
        try {
            const response = await api.get('/getOrderAndDishes');
            const dishes = response.data.flatMap(order =>
                order.Dishes.map(dish => ({ ...dish, orderId: order.id }))
            );
            setCart(dishes);
            return dishes;
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getItensCart();
        getRandomValue()
    }, []);

    return (
        <>
            {loading ? (
                <h1>Carregando...</h1>
            ) : (
                <>
                    {cart.length > 0 ? (
                        <>
                            <h1 className="title-cart">Tudo pronto para finalizar sua compra?</h1>
                            <div className="containers">
                                <TableCart cart={cart} getItensCart={getItensCart} setCart={setCart} />
                                <StatusCart cart={cart} randomValue={randomValue} />
                            </div>
                        </>
                    ) : (
                        <h1 className='carrinho-vazio-title'>Seu carrinho está vazio.</h1>
                    )}
                </>
            )
            }
        </>
    );
};

export default Cart;
