import { useEffect, useState } from 'react';
import api from '../../api';
import './styles.scss'
import { useContext } from 'react';
import { Context } from '../../Context/AuthProvider';
import { Button, Modal, Radio } from 'antd';

const StatusCart = ({ cart, randomValue }) => {

    const { totalValue } = useContext(Context);
    const [total, setTotal] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [address, setAddress] = useState('')
    const [selectedAddress, setSelectedAddress] = useState({});

    useEffect(() => {
        calcTotal()
    }, [cart])

    const calcTotal = async () => {
        const response = await api.get('/countTotalDishesValue')
        setTotal(response.data.total)
    }

    const findAddress = async () => {
        try {
            const response = await api.get('/findAddress');
            setAddress(response.data.address);
            // console.log(response.data.address)
            setModalVisible(true);
        } catch (error) {
            console.log(error);
            alert('Não foi possível localizar seu endereço!');
        }
    };

    const handleSelectAddress = (selectedAddress) => {
        setSelectedAddress(selectedAddress);
        setModalVisible(false);
    };


    return (
        <div className='container-resumo-compra'>
            <div className='container-secundario-resumo'>
                <h1>Resumo da compra</h1>
            </div>

            <div className='info-produtos'>
                <h1 className="subtotal">Sub-total <span>{totalValue ? (`R$ ${totalValue}`) : total}</span></h1>
                <h1 className="frete">Frete <span>{selectedAddress && Object.keys(selectedAddress).length > 0 ? `R$ ${randomValue}` : 'Não calculado'}</span></h1>
                {selectedAddress && Object.keys(selectedAddress).length > 0 && (
                    <>
                        <h1 className='endereço'>Rua: <span>{selectedAddress.street}</span></h1>
                        <h1 className='endereço'>Bairro: <span>{selectedAddress.neighborhood}</span></h1>
                    </>
                )
                }
                <a href='#' style={{ cursor: 'not-allowed' }}>Adicionar cupom de desconto</a>
                <p>
                    <button
                        className='selecionar-endereco-button'
                        onClick={() => { findAddress() }}
                    >
                        Selecionar endereço
                    </button>
                </p>
            </div >

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

            <Modal
                title="Selecione um endereço"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <Radio.Group
                    onChange={(e) => setSelectedAddress(e.target.value, console.log(e.target.value))}
                    value={selectedAddress}
                >
                    {selectedAddress &&
                        (Array.isArray(address) ? address : Object.values(address)).map((address) => (
                            <Radio key={address.id} value={address}>
                                {`${address.street}, ${address.neighborhood}`}
                            </Radio>
                        ))
                    }
                    <Button onClick={() => { handleSelectAddress(selectedAddress) }}>Salvar</Button>
                </Radio.Group>

            </Modal>

        </div >
    )
}

export default StatusCart;