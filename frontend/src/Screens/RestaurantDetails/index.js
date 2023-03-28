
import { useEffect, useState } from "react"
import api from "../../api";
import { useParams } from 'react-router-dom';
import { createClient } from 'pexels';
import './styles.scss'
import ListItem from "../../Components/ListItem";

const RestaurantDetails = () => {

    // const { authenticated, setAuthenticated } = useContext(Context);

    const { id } = useParams()
    const [dishes, setDishes] = useState([])
    const client = createClient('rzVuvCqjKdlrJWBobfC99e03yIFrTr3jZb8UR4sjELzGu1PcyR9n12fO');

    useEffect(() => {
        async function getDishes() {
            const response = await api.get(`/restaurantes/${id}/pratos`)
            const AllDishes = response.data.dishes.map((dish) => ({
                ...dish,
                img_dish: ''
            }));
            const photos = await Promise.all(
                AllDishes.map(async (dish, i) => {
                    const query = dish.dish_name;
                    const result = await client.photos.search({ query, per_page: 1 });
                    return result.photos[0].src.medium;
                })
            );
            const dishesWithPhotos = AllDishes.map((dish, i) => ({
                ...dish,
                img_dish: photos[i]
            }));
            setDishes(dishesWithPhotos);
        }
        getDishes()
    }, [id]);

    return (
        <>
            <div className="title-pratos">
                <h1>Escolha os itens desejar e adicione ao carrinho!</h1>
            </div>
            <ListItem dishes={dishes} />
        </>
    )
}

export default RestaurantDetails;
