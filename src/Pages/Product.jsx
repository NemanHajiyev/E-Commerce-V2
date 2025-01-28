import React from 'react';
import '../Styles/Products.css';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToBaket } from '../Redux/cartSlice';
import { addToFavorie } from '../Redux/productSlice';
import { FcLike } from 'react-icons/fc';
import { productAddToasty } from '../React-Toastify/Toastify';
import { useNavigate } from 'react-router-dom';

const Product = ({ getData }) => {
    const { id, image, name, price, quantity } = getData;
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const addFavoire = () => {
        dispatch(addToFavorie(getData));
    };

    const productDetail = () => {
        navigate(`/product-detail/${id}`)
    }

    const AddToBasket = () => {
        dispatch(addToBaket(getData));
        productAddToasty()
    };

    return (
        <div
            className="product-detail">
            <span className='fav-icon' onClick={addFavoire}>
                <FcLike />
            </span>
            <img
                onClick={productDetail}
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
    );
};

export default Product;
