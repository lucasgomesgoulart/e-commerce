import React, { useState } from 'react';
import './styles.scss'
import FirstFormRestaurant from './FirstFormRestaurant'
import SecondFormRestaurant from './SecondFormRestaurant'

const RestaurantForm = ({ userData }) => {
    const [statusForm, setStatusForm] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        cnpj: '',
        phone: '',
        zip_code: '',
        state: '',
        city: '',
        neighborhood: '',
        street: '',
        number: ''
    });

    const handleFirstFormFinish = (values) => {
        setFormData({ ...formData, ...values });
        setStatusForm(2);
    };

    const handleSecondFormFinish = (values) => {
        setFormData({ ...formData, ...values });
        setStatusForm(3);
    };

    const handleBackButtonClick = () => {
        setStatusForm(1);
    };

    return (
        <div style={{ disflex: 'flex' }}>
            {statusForm === 1 ? (
                <FirstFormRestaurant
                    onFinish={handleFirstFormFinish}
                    setFormData={setFormData}
                    setStatusForm={setStatusForm}
                    formData={formData}
                    userData={userData}
                />
            ) : null}
            {statusForm === 2 ? (
                <SecondFormRestaurant
                    onFinish={handleSecondFormFinish}
                    setFormData={setFormData}
                    setStatusForm={setStatusForm}
                    formData={formData}
                    userData={userData}
                />
            ) : null}
        </div>
    )
}

export default RestaurantForm;
