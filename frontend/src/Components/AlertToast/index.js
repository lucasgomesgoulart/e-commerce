import Swal from 'sweetalert2';
import './styles.scss';

const AlertToast = (title, icon, position = 'top-end', width = '350px') => {
    return Swal.fire({
        position: position,
        icon: icon,
        title: title,
        showConfirmButton: false,
        width: width,
        heightAuto: true,
        timer: 1500
    });
};

export default AlertToast;
