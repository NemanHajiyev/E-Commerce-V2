import React from 'react';
import '../Styles/Products.css';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToBaket } from '../Redux/cartSlice';
import { addToFavorie } from '../Redux/productSlice';
import { FcLike } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import { notifySuccess, notifyError } from '../React-Toastify/Toastify';


const Product = ({ getData }) => {
    const { id, image, name, price, quantity } = getData;

    const dispatch = useDispatch();
    const { favProducts } = useSelector((store) => store.product)

    const addFavoire = () => {
        const isAlreadyFavorite = favProducts.some((item) => item.id === getData.id);
        if (!isAlreadyFavorite) {
            dispatch(addToFavorie(getData));
            setTimeout(() => {
                notifySuccess()
            }, 0)
        } else {
            notifyError()
        }
    };


    const AddToBasket = () => {
        dispatch(addToBaket(getData));
    };

    return (
        <>
            <ToastContainer />
            <div className="product-detail">
                <span className='fav-icon' onClick={addFavoire}>
                    <FcLike />
                </span>
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
    );
};

export default Product;
