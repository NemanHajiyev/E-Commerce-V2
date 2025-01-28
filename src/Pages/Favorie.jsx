import React from 'react'
import { FaStar } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { addToBaket, } from '../Redux/cartSlice';
import { favorieDelete, productAddToasty } from '../React-Toastify/Toastify';
import { removeFavorieItem } from '../Redux/productSlice';
import { useNavigate } from 'react-router-dom';



const Favorie = ({ favProduct }) => {
    const { id, image, name, price, quantity } = favProduct;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const removeItem = () => {
        favorieDelete()
        dispatch(removeFavorieItem(favProduct))
    }

    const AddToBasket = () => {
        dispatch(addToBaket(favProduct));
        productAddToasty()
    };

    const getProductDetail = () => {
        navigate(`/product-detail/${id}`)
    }

    return (
        <>
            <div className="product-detail">
                <span className='fav-icon' onClick={removeItem}><FcLike /></span>
                <img
                    onClick={getProductDetail}
                    src={image} alt={name} />
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
