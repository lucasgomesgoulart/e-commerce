import RestaurantForm from '../RestaurantForm';

const RegisterRestaurant = ({ userData }) => {
    return (
        <div>
            <RestaurantForm userData={userData} />
        </div>
    );
};


export default RegisterRestaurant;
