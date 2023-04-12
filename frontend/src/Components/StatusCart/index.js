import { useEffect, useState } from 'react';
import api from '../../api';
import './styles.scss'
import { useContext } from 'react';
import { Context } from '../../Context/AuthProvider';

const StatusCart = ({ cart, randomValue }) => {

    const { totalValue } = useContext(Context);

    const [total, setTotal] = useState('')
    

    useEffect(() => {
        calcTotal()
    }, [cart])

    const calcTotal = async () => {
        const response = await api.get('/countTotalDishesValue')
        setTotal(response.data.total)
    }



    

    return (
        <div className='container-resumo-compra'>
            <div className='container-secundario-resumo'>
                <h1>Resumo da compra</h1>
            </div>

            <div className='info-produtos'>
                <h1 className="subtotal">Sub-total <span>{totalValue ? (`R$ ${totalValue}`) : total}</span></h1>
                <h1 className="frete">Frete <span>R$ {randomValue}</span></h1>
                <a href='#'>Adicionar cupom de desconto</a>
            </div>

            <div className='info-produtos-total'>
                <h1>Total
                    <span>
                        <span>{totalValue ? (Number(totalValue) + Number(parseFloat(randomValue))).toFixed(2) : (Number(total) + Number(parseFloat(randomValue))).toFixed(2)}</span>
                    </span>
                </h1>
            </div>

            <button className='info-produtos-button'>
                FINALIZAR COMPRA
            </button>

        </div>
    )
}

export default StatusCart;