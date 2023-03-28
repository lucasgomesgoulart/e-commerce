import { createElement } from "react"
import { List, Avatar, Space } from 'antd';
import {  LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import ButtonCart from "../ButtonCart";

const ListItem = ({ dishes, id }) => {
    const IconText = ({ icon, text }) => (
        <Space>
            {createElement(icon)}
            {text}
        </Space>
    );

    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page)
                },
                pageSize: 3
            }}
            dataSource={dishes}
            renderItem={(item) => (
                <List.Item
                    key={item.id}
                    actions={[
                        <IconText icon={LikeOutlined} text={Math.floor(Math.random() * 25)} key="list-vertical-like-o" />,
                        <IconText icon={DislikeOutlined} text={Math.floor(Math.random() * 7)} key="list-vertical-message" />,
                        <ButtonCart item={item} />
                    ]}
                    extra={
                        <Avatar size={180} src={item.img_dish} style={{ marginRight: '200px' }} />
                    }
                >
                    <List.Item.Meta
                        title={<a style={{ fontSize: '18px', fontWeight: 500 }} href={item.href}>{item.dish_name}</a>}
                        description={
                            <>
                                <p style={{ fontSize: '16px' }}>
                                    <span style={{ color: 'black' }}>Descrição: </span>
                                    {item.description}
                                </p>
                                <p style={{ fontSize: '16px' }}>
                                    <span style={{ color: 'black' }}>Preço: </span>
                                    R$:{item.price}
                                </p>

                            </>
                        }
                    />
                </List.Item>
            )
            }
        />
    )
}

export default ListItem;