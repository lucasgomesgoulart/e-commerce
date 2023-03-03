import AuthContext from '../../Context/AuthContext'
import { Field, Form, Formik } from 'formik'
import './style.scss'


const LoginInputs = () => {
    return (
        <Formik>
            <Form>
                <Field name="username" placeholder="Nome de usuario" />
                <Field name="password" placeholder="Senha" />
            </Form>
        </Formik>
    )
}

export default LoginInputs;