import React, { useState } from 'react';
import './styles.scss'
import FirstFormRestaurant from './FirstFormRestaurant'
import SecondFormRestaurant from './SecondFormRestaurant'
import FinishFormRestaurant from './FinishFormRestaurant';
import { Progress } from 'antd';



const RestaurantForm = () => {

    const [statusForm, setStatusForm] = useState(1);
    const [formData, setFormData] = useState('');
    const [percent, setPercent] = useState(0);

    return (
        <div style={{disflex: 'flex'}}>
            {statusForm === 1 ? <FirstFormRestaurant setPercent={setPercent} setFormData={setFormData} setStatusForm={setStatusForm} /> : null}
            {statusForm === 2 ? <SecondFormRestaurant setPercent={setPercent} formData={formData} setFormData={setFormData} setStatusForm={setStatusForm} /> : null}
            {statusForm === 3 ? <FinishFormRestaurant setPercent={setPercent} formData={formData} setFormData={setFormData} setStatusForm={setStatusForm} /> : null}

            <Progress className='progressBar'
                percent={percent}
                type='circle'
            />
        </div>
    )
}

export default RestaurantForm;
