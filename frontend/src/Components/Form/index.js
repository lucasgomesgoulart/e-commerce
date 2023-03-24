import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup';
import './style.scss'
import { useMutation } from 'react-query';
import api from '../../api';
import SituationHome from '../Situation/1';
import Situation2 from '../Situation/2';
import Situation3 from '../Situation/3';

const FormComponent = () => {

    const navigate = useNavigate()

    const [situation, setSituation] = useState(1);

    const validationSchema = Yup.object().shape({
        password: Yup.string().required('Senha é obrigatório'),
        name: Yup.string().required('Preencha seu nome!'),
        email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
        zip_code: Yup.string().required('CEP é obrigatório')
    });

    const registerUserMotation = useMutation(async (values) => {
        try {
            const { data } = await api.post('/createUser', values)
            await api.post('/createAddress', {
                user_id: data.id,
                state: values.state,
                city: values.city,
                neighborhood: values.neighborhood,
                number: values.number,
                street: values.street,
                zip_code: values.zip_code
            })
            navigate('/login')
        } catch (error) {
            alert('Ops, algo deu errado! Preencha os campos corretamente')
            console.log(error)
        }
    })


    async function registerUser(values) {
        await registerUserMotation.mutateAsync(values)
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
                    registerUser(values)
                    resetForm()
                }}
            >

                {({ values, touched, resetForm, setFieldValue }) => (
                    <Form>
                        {situation === 1 ? <SituationHome values={values} setSituation={setSituation} /> : ""}

                        {situation === 2 ? <Situation2 values={values} setSituation={setSituation} /> : ""}

                        {situation === 3 ? <Situation3 values={values} setSituation={setSituation} setFieldValue={setFieldValue} />: ""}
                    </Form>
                )
                }
            </Formik >
        </>
    );
};

export default FormComponent;
