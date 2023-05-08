import { Formik, Form, Field, ErrorMessage } from 'formik';
import api from '../../../api';

async function emailValidate(email, setSituation) {
    try {
        const result = await api.get('/users', {
            params: {
                email: email
            }
        });
        if (result.status === 200) {
            setSituation(2)
        } else {
            alert('Email já cadastrado')
        }

    } catch (error) {
        console.log(error);
    }
}
const SituationHome = ({ values, setSituation }) => {
    return (
        <>
            <div className='div-title'>
                <h2>Cadastre-se agora e faça seus pedidos de onde estiver!</h2>
            </div>
            <div>
                <Field name="email" placeholder="Digite seu e-mail" />
            </div>
            <button type="button" onClick={() => {
                emailValidate(values.email, setSituation)
            }}>
                Continuar
            </button>
        </>
    )
}

export default SituationHome