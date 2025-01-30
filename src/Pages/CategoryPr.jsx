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
        <div
            className="product-detail">
            <span className='fav-icon' onClick={addFavoire}>
                <FcLike />
            </span>
            <img
                onClick={productDetail}
                src={image} />
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
    )
}

export default CategoryPr
