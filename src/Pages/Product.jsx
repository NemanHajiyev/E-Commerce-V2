import React from 'react';
import '../Styles/Products.css';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToBaket } from '../Redux/cartSlice';

const Product = ({ getData }) => {
    const { id, image, name, price, quantity } = getData;

    const dispatch = useDispatch();

    const AddToBasket = () => {
        dispatch(addToBaket(getData));
    };

    return (
        <div className="product-detail">
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
                    <div>
                        <span onClick={AddToBasket}>+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
