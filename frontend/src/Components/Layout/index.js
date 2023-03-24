import { NavLink } from 'react-router-dom';
import Rotas from '../../Rotas';
import './styles.scss';
import './reset.scss';
import { useContext, useEffect } from 'react'
import { Context } from '../../Context/AuthProvider'
import api from '../../api';


const App = () => {

    const { authenticated, setAuthenticated } = useContext(Context)
    console.log(authenticated)

    async function validateToken() {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await api.get('/validate-token', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAuthenticated(response.status === 200);
        } catch (error) {
            setAuthenticated(false);
            console.log(error);
        }
    } else {
        setAuthenticated(false);
    }
}

useEffect(() => {
    validateToken();
}, []);

window.addEventListener('storage', () => {
    validateToken();
});


    const menuItems = [
        { path: '/', name: 'Início' },
        { path: '/restaurantes', name: 'Restaurantes' },
        { path: '/carrinho', name: 'Carrinho' },
        { path: '/contato', name: 'Contato' },
    ];

    const renderMenuItems = () => {
        return menuItems.map((item) => (
            <li key={item.path} id={item.id}>
                <NavLink exact to={item.path}>
                    {item.name}
                </NavLink>
            </li>
        ));
    };

    const renderAccountButton = () => {
        if (authenticated) {
            return (
                <NavLink to="/minha-conta">
                    <button>Minha Conta</button>
                </NavLink>
            );
        } else {
            return (
                <>
                    <ul>
                        <NavLink to="/register">
                            Criar conta
                        </NavLink>
                    </ul>

                    <NavLink to="/login">
                        <button>
                            Entrar
                        </button>
                    </NavLink>
                </>
            );
        }
    };

    return (
        <>
            <header className='header'>
                <ul>{renderMenuItems()}</ul>
                <div className='menu-items-2'>
                    {renderAccountButton()}
                </div>
            </header>
            <Rotas />
        </>
    );
};

export default App;
