import { Form, Input } from 'antd';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import api from '../../../api';

const FirstFormRestaurant = ({ onFinish, setFormData, setStatusForm, userData }) => {
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleFinish = async (values) => {
        const formDataWithUserId = { ...values, user_id: userData.id }
        setFormData(formDataWithUserId);
        try {
            const response = await createRestaurant(formDataWithUserId);
            const restaurantId = response.data.id;
            const formDataWithRestaurantId = { ...formDataWithUserId, restaurant_id: restaurantId };
            setFormData(formDataWithRestaurantId);
            setStatusForm(2);
        } catch (error) {
            console.error('Erro ao criar restaurante:', error);
        }
    };

    const createRestaurant = async (values) => {
        try {
            return await api.post('/createRestaurant', values);
        } catch (error) {
            throw new Error('Erro ao criar restaurante:', error);
        }
    }

    const handleCnpjChange = (event) => {
        setCnpj(event.target.value);
    };

    const handleTelefoneChange = (event) => {
        setTelefone(event.target.value);
    };

    return (
        <div className='container-user'>
            <Form
                className='form-user'
                layout='horizontal'
                size='large'
                onFinish={handleFinish}
            >
                <Form.Item
                    label='Nome do restaurante'
                    name='name'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe o nome do restaurante'
                        }
                    ]}
                    className='form-item'
                >
                    <Input placeholder='Digite o nome do restaurante' />
                </Form.Item>

                <Form.Item
                    label='Descrição'
                    name='description'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe a descrição do restaurante'
                        }
                    ]}
                    className='form-item'
                >
                    <Input placeholder='Ex: Restaurante de frutos do mar' />
                </Form.Item>

                <Form.Item
                    label='CNPJ'
                    name='cnpj'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe o CNPJ do restaurante',
                        }
                    ]}
                    className='form-item'
                >
                    <InputMask
                        mask='99.999.999/9999-99'
                        value={cnpj}
                        onChange={handleCnpjChange}
                        className='masked-input'
                        placeholder='Ex: 99.999.999/9999-99'
                    />
                </Form.Item>

                <Form.Item
                    label='Telefone/Celular'
                    name='phone'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe o telefone/celular do restaurante'
                        }
                    ]}
                    className='form-item'
                >
                    <InputMask
                        mask='(99) 99999-9999'
                        value={telefone}
                        onChange={handleTelefoneChange}
                        className='masked-input'
                        placeholder='Ex: (99) 99999-9999'
                    />
                </Form.Item>

                <button className='button-user' type='submit'>
                    Enviar
                </button>
            </Form>
        </div>
    );
};

export default FirstFormRestaurant;
