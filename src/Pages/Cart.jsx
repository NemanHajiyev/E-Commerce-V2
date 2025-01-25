import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/Basket.css'
import { FaDeleteLeft } from 'react-icons/fa6';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { products, totalQnty, totalPrice } = useSelector((store) => store.cart)

    if (products.length === 0) {
        return (
            <div className='emptyCart'>
                <HiOutlineShoppingBag className='empty-icon' />
                <h1>Your cart is empty</h1>
                <h4>Add something to make me happy</h4>
                <Link to='/shop'><button>Go To Shopping</button></Link>
            </div>)
    }

    return (
        <div className='cart'>
            <div className='cart-left'>
                {products?.map((product) => (
                    <div className="cart-detail">
                        <img src={product.image} />
                        <h2>{product.name}</h2>
                        <h1>${product.price}</h1>
                        <h4>{product.quantity}</h4>
                        <FaDeleteLeft />
                    </div>
                ))}
            </div>
            <div className='cart-right'>

            </div>
        </div>
    )
}

export default Cart
