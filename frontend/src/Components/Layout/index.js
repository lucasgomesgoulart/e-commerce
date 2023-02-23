import { Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import Rotas from '../../Rotas';
import './styles.scss'
const App = () => {

    return (
        <>
            <div className='header'>
                <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'center', gap: '50px', fontSize: '15px' }}>
                    <Menu.Item key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>

                    <Menu.Item key="products">
                        <Link to="/products">Products</Link>
                    </Menu.Item>

                    <Menu.Item key="cart">
                        <Link to="/cart">Cart</Link>
                    </Menu.Item>

                    <Menu.Item key="contact">
                        <Link to="/contact">Contact</Link>
                    </Menu.Item>

                    <Menu.Item key="login">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                </Menu>
                <Rotas />
            </div>
        </>
    );
};

export default App;
