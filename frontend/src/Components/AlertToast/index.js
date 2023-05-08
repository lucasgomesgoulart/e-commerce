import Swal from 'sweetalert2'
import './styles.scss'
const AlertToast = (title, icon) => {
    return (
        Swal.fire({
            position: 'top-end', // define a posição na parte superior direita
            icon: icon,
            title: title,
            showConfirmButton: false,
            width: '350px',
            heightAuto: true, // define a largura do alerta em pixels
            timer: 1500
        })
    )
}

export default AlertToast;