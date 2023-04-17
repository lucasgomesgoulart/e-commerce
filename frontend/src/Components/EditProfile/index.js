import './styles.scss'
import api from '../../api';
import { useEffect } from 'react';
import { Form, Input } from 'antd';

const EditProfile = ({ userData }) => {

    return (
        <div>
            <Form
                layout='horizontal'
                size='large'
                key={userData.name}
                initialValues={{
                    name: userData.name,
                    email: userData.email,
                    password: ''
                }}
            >
                <Form.Item
                    label="Nome"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Informe seu nome",
                        }
                    ]}
                >
                    <Input placeholder='Nome completo' />
                </Form.Item>

                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Informe seu e-mail",
                        }
                    ]}
                >
                    <Input placeholder='Exemplo: afonso@hotmail.com' />
                </Form.Item>

                <Form.Item
                    label="Senha"
                    name="password"
                >
                    <Input placeholder='Insira uma nova senha' />
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditProfile