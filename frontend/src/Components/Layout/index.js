import { NavLink } from 'react-router-dom';
import Rotas from '../../Rotas';
import './styles.scss';
import './reset.scss';
const App = () => {

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

    return (
        <>
            <header className='header'>
                <ul>{renderMenuItems()}</ul>
                <div className='menu-items-2'>
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
                </div>
            </header>
            <Rotas />
        </>
    );
};

export default App;
