import { ErrorMessage, Field } from "formik"
import * as cep from 'cep-promise'

const endereco = async (zip_code, setFieldValue) => {
    try {
        const result = await cep(zip_code)
        console.log(result);
        setFieldValue('street', result.street)
        setFieldValue('state', result.state)
        setFieldValue('city', result.city)
        setFieldValue('neighborhood', result.neighborhood)
    } catch (e) {
        console.log(e)
    }
}



const Situation3 = ({ values, setSituation, setFieldValue }) => {

    const isFormInvalid = !values.zip_code || !values.state || !values.street || !values.city || !values.number || !values.neighborhood

    return (
        <div>
            <div className='div-title2'>
                <h2>Agora seu endereço</h2>
            </div>

            <div>
                <Field type="text" placeholder="Insira o CEP" name="zip_code" onBlur={() => {
                    endereco(values.zip_code, setFieldValue)
                }} />
                <ErrorMessage name="zip_code" component="div" style={{ color: 'red', fontSize: '15px' }} />
                {/* <button type="button" ></button> */}
            </div>

            <div>
                <Field type="text" placeholder="Estado  Ex: SC" name="state" />
                <ErrorMessage name="state" component="div" style={{ color: 'red', fontSize: '15px' }} />
            </div>

            <div>
                <Field type="text" placeholder="Cidade" name="city" />
                <ErrorMessage name="city" component="div" style={{ color: 'red', fontSize: '15px' }} />
            </div>

            <div>
                <Field type="text" placeholder="Bairro" name="neighborhood" />
                <ErrorMessage name="neighborhood" component="div" style={{ color: 'red', fontSize: '15px' }} />
            </div>

            <div>
                <Field type="text" placeholder="Rua" name="street" />
                <ErrorMessage name="street" component="div" style={{ color: 'red', fontSize: '15px' }} />
            </div>

            <div>
                <Field type="text" placeholder="Numero" name="number" />
                <ErrorMessage name="number" component="div" style={{ color: 'red', fontSize: '15px' }} />
            </div>

            <button type="submit" id='botaoSubmit' className={isFormInvalid ? 'btnDisabled' : null} disabled={isFormInvalid}>
                Registrar
            </button>
        </div>
    )
}

export default Situation3