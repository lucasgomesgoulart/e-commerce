import './style.scss'
import FormComponent from '../../Components/Form'
import foodIcon from './assets/food-icon.png'
import LoginInputs from '../../Components/LoginInputs'


const Register = () => {
    const route = window.location.pathname
    
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className="container-left">
                <h2 style={{ fontFamily: 'Cinzel', fontWeight: 600 }}
                >
                    <span>Olimpic</span>
                    <span>Food</span>
                </h2>
                <img src={foodIcon} alt="food" width={250} />
            </div>

            <div className='container-right'>
                {route === '/register'? <FormComponent /> : <LoginInputs />}                
            </div>
        </div >
    )
}

export default Register;