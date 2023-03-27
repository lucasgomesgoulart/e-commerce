import React from 'react'
import { NavLink } from 'react-router-dom'
import CardDash from '../../Components/Card'
import './style.scss'
const Home = () => {
    return (
        <>
            <div className='container-img'>
                <h1>Tudo para facilitar seu dia a dia.</h1>
                <p>O que você precisa está aqui. Peça e receba onde estiver.</p>
            </div>

            <div className='container-login'>
                <input placeholder='Busque aqui.' />
            </div>

            <div className="container-card">
                <NavLink to={"/restaurantes"}>
                    <CardDash className="card">
                        <p>Restaurantes</p>
                        <div>
                            <span>Ver opções</span>
                        </div>
                    </CardDash>
                </NavLink>


                <NavLink to={'/mercado'}>
                    <CardDash className="card" backgroundColor='#b6d048'>
                        <p>Mercado</p>
                        <div>
                            <span>Ver opções</span>
                        </div>
                    </CardDash>
                </NavLink>

            </div>
        </>
    )
}

export default Home;