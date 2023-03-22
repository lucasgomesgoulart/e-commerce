import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import './style.scss'
import { useMutation } from 'react-query';
import api from '../../api';
import SituationHome from '../Situation/1';
import Situation2 from '../Situation/2';
import Situation3 from '../Situation/3';

const FormComponent = () => {

    const [situation, setSituation] = useState(1);

    const validationSchema = Yup.object().shape({
        password: Yup.string().required('Senha é obrigatório'),
        name: Yup.string()
            .required('Preencha seu nome!')
            .test('two-words', 'Por favor coloque seu nome completo', (name) => {
                if (!name) return false;
                const words = name.trim().split(/\s+/);
                return words.length >= 2;
            }),
        email: Yup.string()
            .email('E-mail inválido')
            .required('E-mail é obrigatório'),
        zip_code: Yup.string().required('CEP é obrigatório')
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
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    zip_code: '',
                    state: '',
                    city: '',
                    neighborhood: '',
                    number: '',
                    street: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    registerUser(values, resetForm)
                }}
            >

                {({ values, touched, resetForm, setFieldValue }) => (
                    <Form>
                        {situation === 1 ? <SituationHome values={values} setSituation={setSituation} /> : ""}

                        {situation === 2 ? <Situation2 values={values} setSituation={setSituation} /> : ""}

                        {situation === 3 ? <Situation3 values={values} setSituation={setSituation} setFieldValue={setFieldValue} /> : ""}
                    </Form>
                )
                }
            </Formik >
        </>
    );
};

export default FormComponent;
