import React from 'react'
import '../Styles/Products.css'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';

const Product = ({ getData }) => {
    const { id, image, name, price } = getData;
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
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
