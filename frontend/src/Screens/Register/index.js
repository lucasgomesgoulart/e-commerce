import './style.scss'
import FormComponent from '../../Components/Form'
import foodIcon from './assets/food-icon.png'


const Register = () => {

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
                <FormComponent />
            </div>
        </div >
    )
}

export default Register;