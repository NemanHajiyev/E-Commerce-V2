import React from 'react'
import { FaStar } from 'react-icons/fa';

const Favorie = ({ favProduct }) => {
    const { id, image, name, price, quantity } = favProduct;

    return (
        <div className="product-detail">
            {/* <span className='fav-icon' onClick={addFavoire}><FcLike /></span> */}
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
            {/* <div className='add-basket'>
                <span onClick={AddToBasket}>+</span>
            </div> */}
        </div>
    )
}

export default Favorie
