import { useState, useEffect, useContext, createElement } from 'react';
import { StarOutlined, LikeOutlined, MessageOutlined, FontSizeOutlined } from '@ant-design/icons';
import { Context } from '../../Context/AuthProvider';
import { List, Avatar, Space } from 'antd';
import { createClient } from 'pexels';
import { NavLink } from 'react-router-dom'
import api from '../../api';
import './style.scss';


const Restaurantes = () => {
    const { authenticated, setAuthenticated } = useContext(Context);
    const [restaurantes, setRestaurantes] = useState([]);
    const client = createClient('rzVuvCqjKdlrJWBobfC99e03yIFrTr3jZb8UR4sjELzGu1PcyR9n12fO');
    const query = 'restaurant facade';


    useEffect(() => {
        async function fetchRestaurantes() {
            const response = await api.get('/findAllRestaurants');
            const photos = await client.photos.search({ query, per_page: response.data.allRestaurants.length });
            const restaurantes = response.data.allRestaurants.map((restaurante, i) => ({
                ...restaurante,
                logo: photos.photos[i].src.medium,
            }));
            setRestaurantes(restaurantes);
        }
        fetchRestaurantes()
    }, []);

    const IconText = ({ icon, text }) => (
        <Space>
            {createElement(icon)}
            {text}
        </Space>
    );

    return (
        <div>
            <div className='title-restaurantes'>
                <h1>Tudo que você procura, em um só lugar!</h1>
                <h2>Selecione o restaurante para ver seus pratos.</h2>
            </div>
            <List
                itemLayout='vertical'
                size='large'
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={restaurantes}

                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <IconText icon={StarOutlined} text={Math.floor(Math.random() * 100)} key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text={Math.floor(Math.random() * 100)} key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text={Math.floor(Math.random() * 10)} key="list-vertical-message" />,
                        ]}
                        extra={
                            <Avatar size={125} src={item.logo} style={{display: 'flex', float: 'left'}}/>
                        }
                    >
                        <List.Item.Meta
                            title={<a style={{ fontSize: '22px', fontWeight: 500 }} href={item.href}>{item.name}</a>}
                            description={
                                <>
                                    <p style={{ fontSize: '16px' }}>{item.description}</p>
                                    <p style={{ fontSize: '16px' }}>{item.cnpj}</p>
                                    <NavLink to={`/restaurantes/${item.id}/pratos`}>
                                        <button className='button-menu-dish'>Ver cardápio</button>
                                    </NavLink>
                                </>
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Restaurantes;
