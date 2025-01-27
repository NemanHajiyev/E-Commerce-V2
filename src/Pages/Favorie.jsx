import React from 'react'
import { FaStar } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { addToBaket, } from '../Redux/cartSlice';
import { ToastContainer } from 'react-toastify';
import { productAddToasty, notifyError } from '../React-Toastify/Toastify';
import { removeFavorieItem } from '../Redux/productSlice';



const Favorie = ({ favProduct }) => {
    const { id, image, name, price, quantity } = favProduct;
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(removeFavorieItem(favProduct))
        notifyError()
    }

    const AddToBasket = () => {
        dispatch(addToBaket(favProduct));
        productAddToasty()
    };

    return (
        <>
            <ToastContainer />
            <div className="product-detail">
                <span className='fav-icon' onClick={removeItem}><FcLike /></span>
                <img src={image} alt={name} />
                <div className="product-info">
                    <div>
                        <h3>{name}</h3>
                        <p>${price}</p>
                    </div>
                    <div className="star">
                        <div>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
                <div className='add-basket'>
                    <span onClick={AddToBasket}>+</span>
                </div>
            </div>
        </>
    )
}

export default Favorie
