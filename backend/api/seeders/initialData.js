'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const users = await queryInterface.bulkInsert('Users', [
            { name: 'Lucas', email: 'lucas@example.com', password: 'lucas123', type: '1', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Ana', email: 'ana@example.com', password: 'lucas123', type: '1', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Miguel', email: 'miguel@example.com', password: 'lucas123', type: '1', createdAt: new Date(), updatedAt: new Date() },
        ], {});

        const addresses = await queryInterface.bulkInsert('Addresses', [
            { street: 'Rua A', number: 123, neighborhood: 'Bairro 1', city: 'Cidade 1', state: 'Estado 1', zip_code: '11111-111', user_id: 1, createdAt: new Date(), updatedAt: new Date() },
            { street: 'Rua B', number: 456, neighborhood: 'Bairro 2', city: 'Cidade 2', state: 'Estado 2', zip_code: '22222-222', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
            { street: 'Rua C', number: 789, neighborhood: 'Bairro 3', city: 'Cidade 3', state: 'Estado 3', zip_code: '33333-333', user_id: 3, createdAt: new Date(), updatedAt: new Date() },
        ], {});

        const restaurants = await queryInterface.bulkInsert('Restaurants', [
            { name: 'Restaurante 1', cnpj: '11111111111111', commercial_name: 'Restaurante 1', user_id: 1, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Restaurante 2', cnpj: '22222222222222', commercial_name: 'Restaurante 2', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Restaurante 3', cnpj: '33333333333333', commercial_name: 'Restaurante 3', user_id: 3, createdAt: new Date(), updatedAt: new Date() },
        ], {});

        const dishes = await queryInterface.bulkInsert('Dishes', [
            { dish_name: 'Prato 1', price: 20.5, description: 'Descrição do Prato 1', img_dish: 'imagem1.jpg', restaurant_id: 1, createdAt: new Date(), updatedAt: new Date() },
            { dish_name: 'Prato 2', price: 15.9, description: 'Descrição do Prato 2', img_dish: 'imagem2.jpg', restaurant_id: 2, createdAt: new Date(), updatedAt: new Date() },
            { dish_name: 'Prato 3', price: 18.0, description: 'Descrição do Prato 3', img_dish: 'imagem3.jpg', restaurant_id: 3, createdAt: new Date(), updatedAt: new Date() },
        ], {});

        return Promise.all([users, addresses, restaurants, dishes]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
        await queryInterface.bulkDelete('Addresses', null, {});
        await queryInterface.bulkDelete('restaurants', null, {});
        await queryInterface.bulkDelete('dishes', null, {});
    }
}