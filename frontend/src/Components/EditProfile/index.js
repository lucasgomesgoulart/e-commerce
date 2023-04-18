import './styles.scss'
import { Button, Form, Input } from 'antd';
import './styles.scss'
import { Avatar, Space } from 'antd';
import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const EditProfile = ({ userData }) => {

    const validateMessages = {
        required: '${label} é obrigatório. ',
        types: {
            email: 'Insira um ${label} válido.',
        }

    }

    return (
        <div className='container-user'>


            <Form className='form-user'
                layout='horizontal'
                size='large'
                key={userData.name}
                validateMessages={validateMessages}
                initialValues={{
                    name: userData.name,
                    email: userData.email,
                    password: ''
                }}
            >
                <Space className='container-avatar'>
                    <Avatar
                        // size='large'
                        size={128}
                        alt="Avatar do usuário"
                        icon={<UserOutlined />}
                    />
                </Space>
                <Form.Item className='inputForm'
                    label="Nome"
                    name="name"
                    rules={[
                        {
                            required: true,
                        }
                    ]}
                >
                    <Input placeholder='Nome completo' />
                </Form.Item>

                <Form.Item className='inputForm'
                    label="E-mail"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: 'email'
                        }
                    ]}
                >
                    <Input type='email' placeholder='Exemplo: afonso@hotmail.com' />
                </Form.Item>

                <Form.Item className='inputForm'
                    label="Senha"
                    name="password"
                >
                    <Input.Password type='password' className='inputPassword' size='small' />
                </Form.Item>
                <button type='submit'>
                    Enviar
                </button>
            </Form>
        </div>
    )
}

export default EditProfile