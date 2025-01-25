import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/Basket.css'


const Cart = () => {
    const { products, totalQnty, totalPrice } = useSelector((store) => store.cart)
    console.log(products)
    return (
        <div>
            {products?.map((product) => (
                <div className="cart-detail">
                    <img src={product.image} />
                    <h1>{product.name}</h1>
                    <h2>{product.price}</h2>
                    <p>{product.quantity}</p>
                </div>
            ))}
        </div>
    )
}

export default Cart
