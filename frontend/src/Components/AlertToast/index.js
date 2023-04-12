import Swal from 'sweetalert2'
import './styles.scss'
const AlertToast = (title, text, confirmButtonText) => {
    return (
        Swal.fire({
            title: title,
            confirmButtonText: confirmButtonText,
        })
    )
}

export default AlertToast;