import React from 'react'
import '../Styles/Products.css'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToBaket } from '../Redux/cartSlice';

const Product = ({ getData }) => {
    const { id, image, name, price } = getData;

    const dispatch = useDispatch()
    const { products } = useSelector((store) => store.cart)

    const AddToBasket = () => {
        dispatch(addToBaket(products))
        console.log(products)
    }

    return (
        <div className="product-detail">
            <img src={image} alt={name} />
            <div className="product-info">
                <div>
                    <h3>{name}</h3>
                    <p>${price}</p>
                </div>
                <div className='star'>
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
    )
}

export default Product
