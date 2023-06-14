import React from "react";
import { Empty } from "antd";
// import { PlateIcon } from "./icons"; // Importe o ícone de prato vazio personalizado

const NoDishesMessage = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Empty
                // image={<PlateIcon />} // Use o ícone personalizado
                description={<h1 style={{ fontSize: '25px', textAlign: 'center' }}>Hummmm, parece que esse restaurante não possui nenhum prato cadastrado ainda....</h1>}
            />
        </div>
    );
};

export default NoDishesMessage;
