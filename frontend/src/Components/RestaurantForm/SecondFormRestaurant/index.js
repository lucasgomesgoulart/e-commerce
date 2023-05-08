import { Form, Input, Select } from 'antd';
import InputMask from 'react-input-mask';
import { useState } from 'react';

const SecondFormRestaurant = ({ formData, setFormData, setStatusForm }) => {
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


    const handleFinish = (values) => {
        setFormData({ ...formData, ...values })
        setStatusForm(3)
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

                <button className='button-user' type='submit'>
                    Enviar
                </button>
            </Form>
        </div>
    );
}

export default SecondFormRestaurant;
