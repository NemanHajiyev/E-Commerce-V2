import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (t) => toast.success(t('favorietoasty'), {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
});


export const notifyError = (t) => toast.error(t('addedbefore'), {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
});

export const notifyError2 = (t) => toast.error(t('information'), {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
});

export const productAddToasty = (t) => toast.success(t('addtocart'), {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
});

export const favorieDelete = (t) => toast.success(t('removed'), {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
});
