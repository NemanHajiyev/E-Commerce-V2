import React, { useState } from 'react';
import '../Styles/Checkout.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaDeleteLeft } from 'react-icons/fa6';
import { removeBasketItem } from '../Redux/cartSlice';
import { MdErrorOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ setOrderData, orderData }) => {
    const { products, totalPrice } = useSelector((store) => store.cart);
    const [cartModal, setCartModal] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [shippingInfo, setShippingInfo] = useState({
        fullName: "",
        email: "",
        phoneNumber: '',
        country: "",
        city: '',
        state: '',
        shippingadress: orderData.shippingadress
    });

    const OrderSummary = () => {
        if (shippingInfo.fullName.length > 0 &&
            shippingInfo.email.length > 0 &&
            shippingInfo.phoneNumber.length > 0 &&
            shippingInfo.country.length > 0 &&
            shippingInfo.city.length > 0 &&
            shippingInfo.state.length > 0
        ) {
            setOrderData(shippingInfo)
            navigate('/order-info')
            console.log(shippingInfo)
        }
    }

    const removeItem = (id) => {
        dispatch(removeBasketItem({ id }));
    };




    return (
        <div className='checkout'>
            <div className='checkout-header'>
                <h1>Checkout</h1>
            </div>
            <div className='checkout-container'>
                <div className='checkout-left'>
                    <div className='shipping-info'>
                        <h2>Shipping Information</h2>
                        <div className='button-group'>
                            <button className='btn' onClick={() => setCartModal(true)}>Cart</button>
                            <button className='btn' onClick={() => setCartModal(false)}>Cash</button>
                        </div>
                    </div>

                    <div className='user-info'>
                        <form>
                            <label>Full Name</label>
                            <input type='text' placeholder='Enter your full name'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                                value={shippingInfo.fullName} />

                            <label>Email Address</label>
                            <input type='email'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                                value={shippingInfo.email}
                                placeholder='Enter your email' />

                            <label>Phone Number</label>
                            <input type='number'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, phoneNumber: e.target.value })}
                                value={shippingInfo.phoneNumber}
                                placeholder='Enter your phone number' />

                            <label>Country</label>
                            <input type='text'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                                value={shippingInfo.country}
                                placeholder='Enter your country' />

                            <label>Shipping Adress</label>
                            <input type='text'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, shippingadress: e.target.value })}
                                value={shippingInfo.shippingadress}
                                placeholder='Enter your country' />
                        </form>
                    </div>

                    <div className='user-address'>
                        <div>
                            <label>City</label>
                            <input type='text'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                                value={shippingInfo.city}
                                placeholder='Enter your city' />
                        </div>
                        <div>
                            <label>State</label>
                            <input type='text'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                                value={shippingInfo.state}
                                placeholder='Enter your state' />
                        </div>
                        <div>
                            <label>Zip Code</label>
                            <input type='number' placeholder='Enter your zip code' />
                        </div>
                    </div>

                    {cartModal ? (
                        <div className='debit-cart'>
                            <div className='cart-container'>
                                <div className='cart-info'>
                                    <p>Card Holder Name</p>
                                    <input type="text" />
                                    <p>Card Number</p>
                                    <input type="text" />
                                </div>

                                <div className='cart-date'>
                                    <div>
                                        <p>Expiry (MM/YY)</p>
                                        <input type="month" />
                                    </div>
                                    <div>
                                        <p>CVC</p>
                                        <input type="password" maxLength={3} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (null)}

                </div>

                <div className='checkout-right'>
                    {
                        products.length === 0 ? (
                            <div className='empty-summary'>
                                <MdErrorOutline className='empty-summary-icon' />
                                <h3>Your cart is empty. Please add some products to proceed.</h3>
                                <button className='btn-primary' onClick={() => navigate('/shop')}>
                                    Go To Shopping
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2>Order Summary</h2>
                                <div className='order-details'>
                                    {
                                        products.map((product, index) => (
                                            <div key={index} className='order-item'>
                                                <div className='order-item-left'>
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className='order-item-image'
                                                    />
                                                    <div>
                                                        <h3>{product.name}</h3>
                                                        <p>x{product.quantity}</p>
                                                        <p>${product.price}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h2>${(product.quantity * product.price).toFixed(2)}</h2>
                                                    <FaDeleteLeft
                                                        onClick={() => removeItem(product.id)}
                                                        className='delete-icon'
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <h2 style={{ marginTop: "25px" }}>
                                        Total Price: ${(totalPrice).toFixed(2)}
                                    </h2>
                                </div>
                                <button className='btn btn-primary' onClick={OrderSummary}>Place Order</button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage
