import { Form, Input } from 'antd';
import api from '../../../api';
import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';

const FirstFormRestaurant = ({ onFinish, setFormData, setStatusForm, setPercent, percent }) => {
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [filledInputs, setFilledInputs] = useState({})

    const handleFinish = (values) => {
        setFormData(values)
        setStatusForm(2)
    };

    const handleInputChange = (name) => (event) => {
        // get the input value
        const value = event.target.value;
        // update the filledInputs state
        setFilledInputs((prevState) => ({
            ...prevState,
            [name]: !!value,
        }));
    };

    useEffect(() => {
        // calculate the number of filled inputs
        const filledCount = Object.values(filledInputs).filter(Boolean).length;
        // update the percent state
        setPercent((filledCount / 9) * 100);
    }, [filledInputs]);

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
                    <Input placeholder='Digite o nome do restaurante' onChange={handleInputChange} />
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
                    <Input placeholder='Ex: Restaurante de frutos do mar' onChange={handleInputChange('name')} />
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
                        onChange={handleInputChange('name')}
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
                        onChange={handleInputChange('name')}
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
