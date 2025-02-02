import React, { useEffect, useState } from 'react';
import '../Styles/Products.css';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToBaket } from '../Redux/cartSlice';
import { addToFavorie, removeFavorieItem } from '../Redux/productSlice';
import { FcLike } from 'react-icons/fc';
import { favorieDelete, productAddToasty } from '../React-Toastify/Toastify';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Product = ({ getData, item }) => {
    const [heart, setHeart] = useState(true)

    const { id, image, name, price, quantity } = getData;
    const { t } = useTranslation();
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const addFavoire = () => {
        dispatch(addToFavorie({ newItem: getData, t }))
    };

    const productDetail = () => {
        navigate(`/product-detail/${id}`)
    }

    const AddToBasket = () => {
        dispatch(addToBaket(getData));
        productAddToasty(t)
    };

    return (
        <motion.div
            variants={item}
            className="product-card">
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
        </motion.div>
    );
};

export default Product;
