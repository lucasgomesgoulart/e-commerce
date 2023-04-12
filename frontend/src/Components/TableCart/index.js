import { Table, Button } from 'antd';
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './styles.scss';
import api from '../../api';
import { Context } from '../../Context/AuthProvider';
import { useContext } from 'react';


const TableCart = ({ cart, getItensCart, setCart }) => {

    const { totalValue, setTotalValue } = useContext(Context);

    const deleteItem = async (record, orderId) => {
        try {
            await api.delete('/removeDishFromCartAndOrder', {
                data: {
                    orderId,
                    dishId: record.id,
                },
            });
            getItensCart();
            calcTotalValue();
        } catch (error) {
            console.log(error);
        }
    };

    const addQuantity = (index) => {
        const newCart = [...cart]
        newCart[index].orderDish.quantity += 1
        setCart(newCart)
        calcTotalValue()
    }

    const removeQuantity = (index) => {
        const newCart = [...cart]
        newCart[index].orderDish.quantity -= 1
        setCart(newCart)
        calcTotalValue()
    }

    const calcTotalValue = () => {
        const total = cart.reduce((acumulador, valorAtual) => {
            return acumulador + (valorAtual.orderDish.quantity * valorAtual.price);
        }, 0);
        setTotalValue(total);
    }

    const columns = [
        {
            title: 'Produto',
            dataIndex: 'dish_name',
            key: 'dish_name',
        },
        {
            title: 'Quantidade',
            dataIndex: 'orderDish',
            key: 'quantity',
            render: (orderDish, record, index) => (
                <div>
                    <Button size="small" shape="circle" icon={<MinusOutlined />} disabled={orderDish.quantity === 1} onClick={() => { removeQuantity(index) }} />
                    <span style={{ margin: '0 8px' }}>{orderDish.quantity}</span>
                    <Button size="small" shape="circle" icon={<PlusOutlined />} onClick={() => { addQuantity(index) }} />
                </div>
            ),
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            key: 'price',
            render: price => `R$ ${price}`,
        },
        {
            title: 'Total',
            dataIndex: 'orderDish',
            key: 'total',
            render: (orderDish, record) => `R$ ${orderDish.quantity * record.price}`,
        },
        {
            title: '',
            dataIndex: '',
            key: 'delete',
            render: (record) => <DeleteOutlined className='cart-delete-icon' onClick={() => { deleteItem(record, record.orderId) }} />,
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={cart}
            rowKey={(record, index) => index}
            pagination={false}
            size="large"
            className='table'
        />
    );
};

export default TableCart;
