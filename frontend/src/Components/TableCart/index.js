import { useEffect, useState } from 'react';
import api from '../../api';
import { CaretDownOutlined, CaretUpOutlined, } from '@ant-design/icons';
import './styles.scss'

const TableCart = ({ cart }) => {
    console.log(cart)

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr className='header-table'>
                        <th className="product-header">Produto</th>
                        <th className="price-header">Preço</th>
                        <th className="quantity-header">Quantidade</th>
                        <th className="total-header">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, i) => (
                        <tr key={item.dish_name} className='table-row'>
                            <td className="product-cell">{item.dish_name}</td>
                            <td className="price-cell">R$ {item.price}</td>
                            <td className="quantity-cell">
                                <button className="quantity-button">
                                    <CaretDownOutlined className="quantity-icon" />
                                    <div className="quantity-value">
                                        {item.orderDish.quantity}
                                    </div>
                                    <CaretUpOutlined className="quantity-icon" />
                                </button>
                            </td>
                            <td className="total-cell">R$ {(item.price * item.orderDish.quantity).toFixed(2)}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableCart;
