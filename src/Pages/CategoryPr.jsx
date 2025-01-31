import React from 'react'
import { FaStar } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { addToFavorie } from '../Redux/productSlice';
import { useNavigate } from 'react-router-dom';
import { addToBaket } from '../Redux/cartSlice';
import { productAddToasty } from '../React-Toastify/Toastify';

const CategoryPr = ({ product }) => {
    const { id, image, name, price } = product;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addFavoire = () => {
        dispatch(addToFavorie(product));
    };

    const productDetail = () => {
        navigate(`/product-detail/${id}`)
    }

    const AddToBasket = () => {
        dispatch(addToBaket(product));
        productAddToasty()
    };

    return (
        <div className="product-card">
            <span className="fav-icon" onClick={addFavoire}>
                <FcLike />
            </span>
            <img onClick={productDetail} src={image} alt={name} className="product-image" />
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

export default CategoryPr
