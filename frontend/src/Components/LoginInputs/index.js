import { Field, Form, Formik } from 'formik'
import './style.scss'
import api from '../../api'
import { useContext } from 'react'
import { Context } from '../../Context/AuthProvider'

const LoginInputs = () => {
    const { authenticated, setAuthenticated } = useContext(Context)

    const fazerLogin = async (email, password) => {
        try {
            const userLogged = await api.post('/login', {
                email, password
            })

            if (userLogged.status === 200) {
                const token = userLogged.data.userLogged.token
                // console.log(userLogged)
                localStorage.setItem('token', token)
                setAuthenticated(true)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
        >
            {({ values, resetForm }) => (
                <Form>
                    <Field name="email" placeholder="Nome de usuario" />
                    <Field type="password" name="password" placeholder="Senha" />
                    <button type="submit" onClick={() => {
                        fazerLogin(values.email, values.password);
                    }}>Entrar</button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginInputs;
