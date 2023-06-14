import { Button, List } from "antd";
import ModalEditRestaurant from "../modalEditRestaurant";
import { useEffect, useState } from "react";
import api from "../../api";
import ModalRegisterDish from "../modalRegisterDish";
import './style.scss'

const ListRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isRegisterDishModalVisible, setIsRegisterDishModalVisible] = useState(false);

    const fetchRestaurants = async () => {
        try {
            const response = await api.get('/findMyRestaurants');
            setRestaurants(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const handleEditRestaurant = (restaurant) => {
        setSelectedRestaurant(restaurant);
        setIsEditModalVisible(true);
    };

    const handleRegisterDish = (restaurant) => {
        setSelectedRestaurant(restaurant);
        setIsRegisterDishModalVisible(true);
    };

    const updateSelectedRestaurant = async (restaurant) => {
        try {
            await api.patch(`/updateRestaurant/${restaurant.id}`, restaurant);
            fetchRestaurants();
            setIsEditModalVisible(false);
        } catch (error) {
            console.log(error);
            alert('Erro ao atualizar restaurante');
        }
    };

    const registerDish = async (dish) => {
        try {
            await api.post('/createDish', dish);
            fetchRestaurants();
            setIsRegisterDishModalVisible(false);
        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar o prato');
        }
    };

    const handleDeleteRestaurant = async (id) => {
        try {
            await api.delete(`/deleteRestaurant/${id}`);
            fetchRestaurants();
        } catch (error) {
            console.log(error);
            alert('Erro ao excluir restaurante');
        }
    };

    const handleEditModalClose = () => {
        setSelectedRestaurant(null);
        setIsEditModalVisible(false);
    };

    const handleRegisterDishModalClose = () => {
        setSelectedRestaurant(null);
        setIsRegisterDishModalVisible(false);
    };

    return (
        <div>
            <List
                dataSource={restaurants}
                renderItem={(restaurant) => (
                    <List.Item
                        actions={[
                            <Button className="botao-cadastrar-pratos"
                                type="primary"
                                onClick={() => handleRegisterDish(restaurant)}
                            >
                                Cadastrar pratos
                            </Button>,
                            <Button className="botao-editar"
                                type="primary"
                                onClick={() => handleEditRestaurant(restaurant)}
                            >
                                Editar
                            </Button>,
                            <Button className="botao-apagar"
                                type="danger"
                                onClick={() => handleDeleteRestaurant(restaurant.id)}
                            >
                                Apagar
                            </Button>,
                        ]}
                    >
                        <List.Item.Meta
                            title={restaurant.name}
                            description={restaurant.description}
                        />
                    </List.Item>
                )}
            />
            <ModalEditRestaurant
                selectedRestaurant={selectedRestaurant}
                setSelectedRestaurant={setSelectedRestaurant}
                isModalVisible={isEditModalVisible}
                handleModalClose={handleEditModalClose}
                updateSelectedRestaurant={updateSelectedRestaurant}
            />

            <ModalRegisterDish
                selectedRestaurant={selectedRestaurant}
                setSelectedRestaurant={setSelectedRestaurant}
                isModalVisible={isRegisterDishModalVisible}
                handleModalClose={handleRegisterDishModalClose}
                registerDish={registerDish}
            />
        </div>
    );
};

export default ListRestaurants;
