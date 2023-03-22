import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const menuItems = [
    { title: 'Inicio', path: '/' },
    { title: 'Restaurantes', path: '/restaurante' },
    { title: 'Carrinho', path: '/carrinho' },
    { title: 'Criar conta', path: '/criarconta' },
    { title: 'Login', path: '/login' },
];

const HeaderMenu = () => {
    return (
        <Header style={{}}>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['0']}>
                {menuItems.map((item) => (
                    <Menu.Item key={item.title} style={{ fontSize: '18px' }}>
                        <Link to={item.path}>{item.title}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Header>
    );
};

export default HeaderMenu;
