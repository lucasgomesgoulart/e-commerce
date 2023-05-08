import { Segmented } from 'antd';
import './styles.scss'
import { useEffect, useState } from 'react';
import RegisterRestaurant from '../../Components/RegisterRestaurant'
import EditProfile from '../../Components/EditProfile'
import api from '../../api';

const Account = () => {

    const [menu, setMenu] = useState('')
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        password: '',
        addresses: []
    })


    useEffect(() => {
        getProfile()
        setMenu(1)
    }, [])


    async function getProfile() {
        try {
            const response = await api.get('/findUserById')
            setUserData(response.data)
            // console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Minha conta</h1>
            <Segmented
                onChange={(value) => { setMenu(value) }}
                block
                options={[
                    { label: 'Editar perfil', value: 1 },
                    { label: 'Cadastrar restaurante', value: 2 },
                    { label: 'Informações adicionais', value: 3 }
                ]}
                className='segmented'
            />
            <div>
                {menu === 1 ? <EditProfile userData={userData} /> : null}
                {menu === 2 ? <RegisterRestaurant /> : null}
                {/* {menu === 1 ? <EditPerfil/> : null} */}
            </div>
        </div>
    )
}

export default Account;
