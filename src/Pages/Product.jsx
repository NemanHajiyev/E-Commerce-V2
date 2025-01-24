import React from 'react'
import '../Styles/Products.css'

const Product = ({ getData }) => {
    const { id, image, name, price } = getData;
    return (
        <div className="product-detail">
            <img src={image} alt={name} />
            <div className="product-info">
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Product
