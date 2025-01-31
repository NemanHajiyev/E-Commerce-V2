import React, { useEffect } from 'react';
import '../Styles/Products.css';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToBaket } from '../Redux/cartSlice';
import { addToFavorie } from '../Redux/productSlice';
import { FcLike } from 'react-icons/fc';
import { notifySuccess, productAddToasty } from '../React-Toastify/Toastify';
import { useNavigate } from 'react-router-dom';

const Product = ({ getData }) => {
    const { id, image, name, price, quantity } = getData;
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const addFavoire = () => {
        dispatch(addToFavorie(getData));
        notifySuccess()

    };

    const productDetail = () => {
        navigate(`/product-detail/${id}`)
    }

    const AddToBasket = () => {
        dispatch(addToBaket(getData));
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
    );
};

export default Product;
