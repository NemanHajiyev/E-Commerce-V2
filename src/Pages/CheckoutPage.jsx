import React from 'react';
import '../Styles/Checkout.css';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
    const { products } = useSelector((store) => store.cart);
    console.log(products)

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
                            <button className='btn'>Cart</button>
                            <button className='btn'>Cash</button>
                        </div>
                    </div>

                    <div className='user-info'>
                        <form>
                            <label>Full Name</label>
                            <input type='text' placeholder='Enter your full name' />

                            <label>Email Address</label>
                            <input type='email' placeholder='Enter your email' />

                            <label>Phone Number</label>
                            <input type='number' placeholder='Enter your phone number' />

                            <label>Country</label>
                            <input type='text' placeholder='Enter your country' />
                        </form>
                    </div>

                    <div className='user-address'>
                        <div>
                            <label>City</label>
                            <input type='text' placeholder='Enter your city' />
                        </div>
                        <div>
                            <label>State</label>
                            <input type='text' placeholder='Enter your state' />
                        </div>
                        <div>
                            <label>Zip Code</label>
                            <input type='number' placeholder='Enter your zip code' />
                        </div>
                    </div>
                </div>

                <div className='checkout-right'>
                    <h2>Order Summary</h2>
                    {
                        products?.map((product) => (
                            <>
                                <div className='order-details'>
                                    <p>Item 1: $20</p>
                                    <p>Item 2: $15</p>
                                    <p>Total: $35</p>
                                </div>
                                <button className='btn btn-primary'>Place Order</button>
                            </>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default CheckoutPage
