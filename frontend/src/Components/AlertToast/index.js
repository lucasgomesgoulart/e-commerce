import Swal from 'sweetalert2'
const AlertToast = (title, text, icon, confirmButtonText, position) => {
    return (
        Swal.fire({
            title: title,
            icon: icon,
            confirmButtonText: confirmButtonText,
            position: position
        })
    )
}

export default AlertToast;