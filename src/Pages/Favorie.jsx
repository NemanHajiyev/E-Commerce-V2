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
        <div className="product-card">
            <span className="fav-icon" onClick={removeItem}>
                <FcLike />
            </span>
            <img onClick={getProductDetail} src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h4>{name}</h4>
                <p className="price">${price}</p>
                <div className="star-rating">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="star" />
                    ))}
                </div>
            </div>
            <button className="add-to-basket" onClick={AddToBasket}>+</button>
        </div>
    )
}

export default Favorie
