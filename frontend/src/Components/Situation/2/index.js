import { ErrorMessage, Field } from "formik";

const Situation2 = ({ values, setSituation }) => {
    return (
        <div>
            <div className='div-title2'>
                <h2>Falta pouco...</h2>
            </div>
            <div>
                <Field type="text" placeholder="Nome completo" name="name" />
                <ErrorMessage name="Nome" component="div" style={{ color: 'red', fontSize: '15px' }} />
            </div>

            <div>
                <Field type="password" placeholder="Digite sua senha" name="password" />
                <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '15px' }} />
                <button onClick={() => setSituation(3)}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

export default Situation2;

