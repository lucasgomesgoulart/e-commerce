import React from 'react';
import { Card } from 'antd'
import './style.scss'

const CardDash = ({ children, backgroundColor }) => {
    return (
        <div>
            <Card headStyle={{ color: '#fff' }} className="card" style={{backgroundColor: backgroundColor}}>
                {children}
            </Card>
        </div>
    );
};

export default CardDash;
