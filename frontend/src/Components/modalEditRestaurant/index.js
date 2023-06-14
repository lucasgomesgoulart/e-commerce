import { Modal, Input, Button } from "antd";
import InputMask from 'react-input-mask';

const ModalEditRestaurant = ({
    selectedRestaurant,
    setSelectedRestaurant,
    isModalVisible,
    handleModalClose,
    updateSelectedRestaurant
}) => {
    return (
        <Modal
            title="Editar Restaurante"
            visible={isModalVisible}
            onCancel={handleModalClose}
            footer={null}
        >
            {selectedRestaurant && (
                <>
                    <p>Nome:</p>
                    <Input
                        value={selectedRestaurant.name}
                        onChange={(e) => setSelectedRestaurant({ ...selectedRestaurant, name: e.target.value })}
                        rules={[
                            { required: true, message: 'Por favor, digite o nome do restaurante.' },
                            { max: 50, message: 'O nome não pode conter mais que 50 caracteres.' },
                            { pattern: /^[a-zA-Z\s]+$/, message: 'O nome não pode conter símbolos especiais.' }
                        ]}
                    />

                    <p>Descrição:</p>
                    <Input
                        value={selectedRestaurant.description}
                        onChange={(e) => setSelectedRestaurant({ ...selectedRestaurant, description: e.target.value })}
                    />

                    <p>CNPJ:</p>
                    <InputMask
                        className="masked-input"
                        mask="99.999.999/9999-99"
                        value={selectedRestaurant.cnpj}
                        onChange={(e) => setSelectedRestaurant({ ...selectedRestaurant, cnpj: e.target.value })}
                    />

                    <p>Telefone:</p>
                    <InputMask
                        className="masked-input"
                        mask="(99) 99999-9999"
                        value={selectedRestaurant.phone}
                        onChange={(e) => setSelectedRestaurant({ ...selectedRestaurant, phone: e.target.value })}
                    />

                    <Button
                        style={{
                            color: '#FFF', backgroundColor: '#00a74ec9', marginTop: '10px'  }}
                    type="submit"
                    onClick={() => updateSelectedRestaurant(selectedRestaurant)}
                    >
                    Salvar
                </Button>
        </>
    )
}
        </Modal >
    );
};

export default ModalEditRestaurant;
