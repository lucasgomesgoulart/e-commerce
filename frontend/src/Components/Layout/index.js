import { Layout, Menu } from 'antd';
import { HomeOutlined, ShoppingCartOutlined, LoginOutlined, UserOutlined, UserAddOutlined, ShopOutlined, FileTextOutlined } from '@ant-design/icons';
import { useContext, useEffect } from 'react';
import { Context } from '../../Context/AuthProvider';
import { NavLink } from 'react-router-dom';
import Rotas from '../../Rotas'
import api from '../../api';
import './styles.scss';
import './reset.scss';

const { Sider } = Layout;

const App = () => {
    const { authenticated, setAuthenticated, userId, setUserId } = useContext(Context);

    async function validateToken() {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await api.get('/validate-token', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                // console.log(response)
                setAuthenticated(response.status === 200);
                // setUserId(response.data.userId)
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
        // console.log(userId)
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
            icon: <FileTextOutlined />,
            text: 'Meus pedidos',
            link: '/meus-pedidos',
            className: 'menu-item'
        },
        {
            icon: authenticated ? <UserOutlined /> : <UserAddOutlined />,
            text: authenticated ? 'Minha conta' : 'Criar conta',
            link: authenticated ? `/minha-conta` : '/register',
            className: 'menu-item'
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
            <Sider>
                <div className="logo" />
                <Menu theme="light" mode="inline" className='menu-antd'>
                    {menuItems.map(({ icon, text, link, onClick, className }) => (
                        <Menu.Item key={text} icon={icon} className={className}>
                            {link ? (
                                <NavLink to={link}>{text}</NavLink>
                            ) : (
                                <span onClick={onClick}>{text}</span>
                            )}
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Rotas />
        </>
    );
};

export default App;
