import { Form, Input, Select } from 'antd';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import api from '../../../api';
import AlertToast from '../../AlertToast';

const SecondFormRestaurant = ({ formData, setFormData, setStatusForm, userData }) => {
    const [cep, setCep] = useState('');

    const estados = [
        { label: 'Acre', value: 'AC' },
        { label: 'Alagoas', value: 'AL' },
        { label: 'Amapá', value: 'AP' },
        { label: 'Amazonas', value: 'AM' },
        { label: 'Bahia', value: 'BA' },
        { label: 'Ceará', value: 'CE' },
        { label: 'Distrito Federal', value: 'DF' },
        { label: 'Espírito Santo', value: 'ES' },
        { label: 'Goiás', value: 'GO' },
        { label: 'Maranhão', value: 'MA' },
        { label: 'Mato Grosso', value: 'MT' },
        { label: 'Mato Grosso do Sul', value: 'MS' },
        { label: 'Minas Gerais', value: 'MG' },
        { label: 'Pará', value: 'PA' },
        { label: 'Paraíba', value: 'PB' },
        { label: 'Paraná', value: 'PR' },
        { label: 'Pernambuco', value: 'PE' },
        { label: 'Piauí', value: 'PI' },
        { label: 'Rio de Janeiro', value: 'RJ' },
        { label: 'Rio Grande do Norte', value: 'RN' },
        { label: 'Rio Grande do Sul', value: 'RS' },
        { label: 'Rondônia', value: 'RO' },
        { label: 'Roraima', value: 'RR' },
        { label: 'Santa Catarina', value: 'SC' },
        { label: 'São Paulo', value: 'SP' },
        { label: 'Sergipe', value: 'SE' },
        { label: 'Tocantins', value: 'TO' }
    ];

    const handleFinish = async (values) => {
        const formatDataWithUserId = { ...values, restaurant_id: formData.restaurant_id };
        setFormData(formatDataWithUserId)
        await createAddress(formatDataWithUserId)
        AlertToast('Restaurante cadastrado com sucesso!', 'success', 'center', '200px')
    };

    const createAddress = async (data) => {
        try {
            await api.post('/createAddressRestaurant', data)
            console.log(data)
        } catch (error) {
            console.error('Erro ao criar endereço do restaurante:', error);
        }
    }

    return (
        <div className='container-user'>
            <Form
                className='form-user'
                layout='horizontal'
                size='large'
                onFinish={handleFinish}
            >
                <Form.Item
                    label='CEP'
                    name='zip_code'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe o CEP'
                        }
                    ]}
                    className='form-item'
                >
                    <InputMask
                        mask='99999-999'
                        value={cep}
                        onChange={(event) => setCep(event.target.value)}
                        className='masked-input'
                        placeholder='Ex: 99999-999'
                    />
                </Form.Item>

                <Form.Item
                    label='Estado'
                    name='state'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe o estado'
                        }
                    ]}
                    className='form-item'
                >
                    <Select placeholder='Digite o estado' options={estados} />
                </Form.Item>

                <Form.Item
                    label='Cidade'
                    name='city'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe o nome da cidade'
                        }
                    ]}
                    className='form-item'
                >
                    <Input placeholder='Digite o nome da cidade' />
                </Form.Item>

                <Form.Item
                    label='Bairro'
                    name='neighborhood'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe o nome do bairro'
                        }
                    ]}
                    className='form-item'
                >
                    <Input placeholder='Digite o nome do bairro' />
                </Form.Item>


                <Form.Item
                    label='Rua'
                    name='street'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe o nome da rua'
                        }
                    ]}
                    className='form-item'
                >
                    <Input placeholder='Digite o nome da rua' />
                </Form.Item>

                <Form.Item
                    label='Número'
                    name='number'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe o número do estabelecimento'
                        }
                    ]}
                    className='form-item'
                >
                    <Input placeholder='Digite o número do estabelecimento' />
                </Form.Item>

                <div style={{ display: 'flex', gap: '10px' }}>

                    <button className='button-user' onClick={(() => { setStatusForm(1) })}>
                        Voltar
                    </button>

                    <button className='button-user' type='submit'>
                        Enviar
                    </button>
                </div>
            </Form>
        </div>
    );
}

export default SecondFormRestaurant;
