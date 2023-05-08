import './styles.scss'
import { Form, Input, message } from 'antd';
import './styles.scss'
import api from '../../api';

const EditProfile = ({ userData }) => {

    const validateMessages = {
        required: '${label} é obrigatório. ',
        types: {
            email: 'Insira um ${label} válido.',
        }
    }

    const onFinish = async (values) => {
        const payload = {
            name: values.name,
            email: values.email
        }
        //verifica se existe um valor em password, e trim() é para ver se nao é uma string
        if (values.password && values.password.trim() !== '') {
            payload.password = values.password
        }

        try {
            const response = await api.patch(`/updateUser/${userData.id}`, payload)
            console.log(response)
            if (response.status === 200) {
                alert('ok')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container-user'>
            <Form className='form-user'
                layout='horizontal'
                size='large'
                key={userData.name}
                validateMessages={validateMessages}
                onFinish={(values) => onFinish(values)}
                initialValues={{
                    name: userData.name,
                    email: userData.email,
                    password: ''
                }}
            >                
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
                    style={{marginLeft: 10}}
                >
                    <Input.Password type='password' className='inputPassword' size='small'/>
                </Form.Item>
                <button className='button-user' type='submit'>
                    Enviar
                </button>
            </Form>
        </div>
    )
}

export default EditProfile