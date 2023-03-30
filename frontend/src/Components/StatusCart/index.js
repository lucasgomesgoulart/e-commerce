import './styles.scss'

const StatusCart = () => {
    return (
        <div className='container-resumo-compra'>
            <div className='container-secundario-resumo'>
                <h1>Resumo da compra</h1>
            </div>
            <div className='info-produtos'>
                <h1>Sub-total { }</h1>
                <h1>Frete { }</h1>
                <a href='#'>Adicionar cupom de desconto</a>
            </div>
            <div className='info-produtos-total'>
                <h1>Total </h1>
            </div>
            <button className='info-produtos-button'>
                FINALIZAR COMPRA
            </button>
        </div>
    )
}

export default StatusCart;

