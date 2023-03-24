import { ErrorMessage, Field } from "formik";
import { useEffect } from "react";

const Situation2 = ({ values, setSituation }) => {


    const isFormInvalid = !values.name || !values.password;

    return (
        <div>
            <div className='div-title2'>
                <h2>Falta pouco...</h2>
            </div>
            <div>
                <Field type="text" placeholder="Nome completo" name="name" />
                <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '15px' }} />
            </div>
            <div>
                <Field type="password" placeholder="Digite sua senha" name="password" />
                <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '15px' }} />
                <button
                    onClick={() => setSituation(3)}
                    disabled={isFormInvalid}
                    className={isFormInvalid ? 'btnDisabled' : null}
                    title={isFormInvalid ? 'Preencha os campos corretamente!' : null}
                >
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default Situation2;
