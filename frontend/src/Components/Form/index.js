import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import './style.scss'
import { useMutation } from 'react-query';
import api from '../../api';

const FormComponent = () => {

    const [stepOne, setStepOne] = useState(false);
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
        name: Yup.string()
            .required('Name is required')
            .test('two-words', 'Please input your full name', (name) => {
                if (!name) return false;
                const words = name.trim().split(/\s+/);
                return words.length >= 2;
            }),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        phone: Yup.string()
            .matches(/^\d+$/, 'Phone must contain only numbers')
            .max(11, 'Phone must be at most 11 characters long')
            .required('Phone is required'),
    });


    const registerUserMotation = useMutation(async (values, resetForm) => {
        const { data } = await api.post('/createUser', values)
        return data;
    })


    async function registerUser(values, resetForm) {
        try {
            const result = await registerUserMotation.mutateAsync(values)
            resetForm()
            console.log(result)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {stepOne ? null : <div className='div-title'>
                <h2>Cadastre-se agora e faça seus pedidos de onde estiver!</h2>
            </div>}

            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    name: '',
                    phone: '',
                    email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    registerUser(values, resetForm)
                }}
            >
                {({ values, touched, resetForm }) => (
                    <Form>
                        {stepOne ? null : (
                            <>
                                <div>
                                    <Field
                                        type="text"
                                        placeholder="Nome de usuário"
                                        name="username"
                                    />
                                    <ErrorMessage
                                        name="username"
                                    >
                                        {(msg) =>
                                            stepOne && values.username && touched.username ? (
                                                <div style={{ color: 'red', fontSize: '15px' }}>{msg}</div>
                                            ) : null
                                        }
                                    </ErrorMessage>
                                </div>

                                <div>
                                    <Field type="password" placeholder="Digite sua senha aqui" name="password" />
                                    <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '15px' }} />
                                </div>

                                <button type="button" onClick={() => setStepOne(true)} disabled={!values.username || !values.password}>
                                    Continuar
                                </button>
                            </>
                        )}

                        {stepOne && (
                            <div>
                                <div className='div-title2'>
                                    <h2>Falta pouco...</h2>
                                </div>
                                <div>
                                    <Field type="text" placeholder="Nome completo" name="name" />
                                    <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '15px' }} />
                                </div>

                                <div>
                                    <Field type="text" placeholder="Email" name="email" />
                                    <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '15px' }} />
                                </div>

                                <div>
                                    <Field type="text" placeholder="Telefone" name="phone" />
                                    <ErrorMessage name="phone" component="div" style={{ color: 'red', fontSize: '15px' }} />
                                    <button type="submit" id='botaoSubmit'>
                                        Registrar
                                    </button>
                                </div>
                            </div>
                        )}
                    </Form>
                )
                }
            </Formik >
        </>
    );
};

export default FormComponent;
