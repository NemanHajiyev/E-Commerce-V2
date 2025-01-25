import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Basket.css'
import { FaDeleteLeft } from 'react-icons/fa6';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { removeBasketItem } from '../Redux/cartSlice';

const Cart = () => {
    const { products, totalQnty, totalPrice } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(removeBasketItem({ id }));
    };

    if (products.length === 0) {
        return (
            <div className='emptyCart'>
                <HiOutlineShoppingBag className='empty-icon' />
                <h1>Your cart is empty</h1>
                <h4>Add something to make me happy</h4>
                <Link to='/shop'><button>Go To Shopping</button></Link>
            </div>
        );
    }

    return (
        <div className='cart'>
            <div className='cart-left'>
                <div className='cart-title'>
                    <div style={{ width: "10%" }}>Product</div>
                    <div className='cart-title-detail'>
                        <p>Name</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Remove</p>
                    </div>
                </div>
                {products?.map((product) => (
                    <div className="cart-detail" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <h1>${product.price}</h1>
                        <h4>{product.quantity}</h4>
                        <FaDeleteLeft
                            onClick={() => removeItem(product.id)}
                            className='delete-icon'
                        />
                    </div>
                ))}
            </div>

            <div className='cart-right'>
                {/* Diğer içerikler buraya gelebilir */}
            </div>
        </div>
    );
}

export default Cart;
