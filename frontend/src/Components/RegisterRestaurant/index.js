import { Progress } from 'antd';
import RestaurantForm from '../RestaurantForm';
import { useState } from 'react';

const RegisterRestaurant = () => {

    const [percent, setPercent] = useState(88);



    return (
        <div>
            
            <RestaurantForm  />
        </div>
    );
};


export default RegisterRestaurant;
