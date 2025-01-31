import React from 'react';
import '../Styles/OrderInfo.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const OrderInfo = ({ orderData }) => {
    const { products, totalPrice, totalQnty } = useSelector((store) => store.cart);
    const navigate = useNavigate();
    console.log(orderData)




    return (

        <div className="order-info-container">

            <Confetti width={1500} height={1000} />
            <h1 className="order-summary-title">Order Summary</h1>

            <div className="order-summary-card">
                <div className="order-section">
                    <h2 className="section-title">Shipping Information</h2>
                    <p><span>Full Name:</span> {orderData.fullName}</p>
                    <p><span>Email:</span> {orderData.email}</p>
                    <p><span>Phone Number:</span> {orderData.phoneNumber}</p>
                </div>

                <div className="order-section">
                    <h2 className="section-title">Address</h2>
                    <p><span>Country:</span> {orderData.country}</p>
                    <p><span>City:</span> {orderData.city}</p>
                    <p><span>State:</span> {orderData.state}</p>
                    <p><span>Zip Code:</span> {orderData.zipcode}</p>
                    <p><span>Shipping Address:</span> {orderData.shippingadress}</p>
                </div>
                <div>
                    {products?.map((product) => (
                        <div className='order-info'>
                            <p>{product.name} x {product.quantity}</p>
                            <h3>${(product.quantity) * (product.price)}</h3>
                        </div>
                    ))}
                    <hr />
                    <h1>Total Price : ${(totalPrice).toFixed(2)}</h1>
                    <button
                        onClick={() => navigate('/shop')}
                        className='Continue-Shopping'>Continue Shopping</button>
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;