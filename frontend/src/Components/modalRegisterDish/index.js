import { Modal, Input, Button } from "antd";
import { useState } from "react";

const ModalRegisterDish = ({
    selectedRestaurant,
    setSelectedRestaurant,
    isModalVisible,
    handleModalClose,
    registerDish
}) => {
    const [dishName, setDishName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleRegisterDish = () => {
        const newDish = { dish_name: dishName, price: price, description: description, restaurant_id: selectedRestaurant.id };
        registerDish(newDish);
        setDishName("");
        setPrice("");
        setDescription("");
    };

    return (
        <Modal
            title="Cadastrar Novo Prato"
            visible={isModalVisible}
            onCancel={handleModalClose}
            footer={null}
        >
            <p>Nome do Prato:</p>
            <Input
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
                placeholder="Digite em ingles para buscar uma imagem de referencia"
            />

            <p>Preço:</p>
            <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <p>Descrição:</p>
            <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <Button
                style={{ color: '#FFF', backgroundColor: '#00C853', marginTop: '10px' }}
                type="primary"
                onClick={handleRegisterDish}
            >
                Cadastrar
            </Button>
        </Modal>
    );
};

export default ModalRegisterDish;
