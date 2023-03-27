import { Layout, Menu } from 'antd';
import { HomeOutlined, ShoppingCartOutlined, LoginOutlined, UserOutlined, UserAddOutlined, ShopOutlined } from '@ant-design/icons';
import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Context/AuthProvider';
import Rotas from '../../Rotas'
import api from '../../api';
import './styles.scss';
import './reset.scss';

const { Sider } = Layout;

const App = () => {
    const { authenticated, setAuthenticated } = useContext(Context);
    console.log(authenticated);

    async function validateToken() {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await api.get('/validate-token', {
                    headers: { Authorization: `Bearer ${token}` },
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
        {
            icon: <HomeOutlined />,
            text: 'Início',
            link: '/',
        },
        {
            icon: <ShopOutlined />,
            text: 'Restaurantes',
            link: '/restaurantes',
        },
        {
            icon: <ShoppingCartOutlined />,
            text: 'Carrinho',
            link: '/carrinho',
        },
        {
            icon: authenticated ? <UserOutlined /> : <UserAddOutlined />,
            text: authenticated ? 'Minha conta' : 'Criar conta',
            link: authenticated ? '/minha-conta' : '/register',
        },
    ];

    if (!authenticated) {
        menuItems.push({
            icon: <LoginOutlined />,
            text: 'Faça o login',
            link: '/login'
        });
    }

    return (
        <>
            <Layout>
                <Sider>
                    <div className="logo" />
                    <Menu theme="light" mode="inline" className='menu-antd'>
                        {menuItems.map(({ icon, text, link }) => (
                            <Menu.Item key={text} icon={icon} className='menu-item'>
                                <NavLink to={link} activeClassName="active">
                                    {text}
                                </NavLink>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
            </Layout>
            <Rotas />
        </>
    );
};

export default App;
