import React, { useEffect, useState } from 'react';
import '../Styles/OrderInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const OrderInfo = ({ orderData }) => {
    const { t } = useTranslation();
    const { orderProducts, totalPrice } = useSelector((store) => store.order);
    const navigate = useNavigate();

    const [savedOrderData, setSavedOrderData] = useState(() => {
        try {
            const savedData = localStorage.getItem("registerdata");
            return savedData ? JSON.parse(savedData) : {};
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
            return {};
        }
    });
    console.log(orderProducts)

    useEffect(() => {
        if (orderData) {
            setSavedOrderData(orderData);
            localStorage.setItem("registerdata", JSON.stringify({ ...savedOrderData, orderData }));
        }
    }, [savedOrderData]);

    return (
        <>
            {savedOrderData ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2 }}
                    className="order-info-container">
                    <Confetti width={1500} height={1000} />
                    <h1 className="order-summary-title">{t('shipping.title')}</h1>
                    <div className="order-summary-card">
                        <div className="order-section">
                            <h2 className="section-title">{t('shipping.infoTitle')}</h2>
                            <p><span>{t('shipping.fullName')}</span>: {savedOrderData.fullName}</p>
                            <p><span>{t('shipping.email')}</span>: {savedOrderData.email}</p>
                            <p><span>{t('shipping.phone')}</span>: {savedOrderData.phoneNumber}</p>
                        </div>

                        <div className="order-section">
                            <h2 className="section-title">{t('shipping.shippinginfo')}</h2>
                            <p><span>{t('shipping.country')}</span>: {savedOrderData.country}</p>
                            <p><span>{t('shipping.city')}</span>: {savedOrderData.city}</p>
                            <p><span>{t('shipping.state')}</span>: {savedOrderData.state}</p>
                            <p><span>{t('shipping.zipcode')}</span>: {savedOrderData.zipcode}</p>
                            <p><span>{t('shipping.shippingAddress')}</span>: {savedOrderData.shippingadress}</p>
                        </div>
                        <div>
                            {orderProducts?.map((product) => (
                                <div className='order-info' key={product.id}>
                                    <p>{t('shipping.productname')}: {product.name} x {product.quantity}</p>
                                    <h3>${(product.quantity * product.price).toFixed(2)}</h3>
                                </div>
                            ))}
                            <hr />
                            <h1>{t('cart.totalPrice')}: ${(totalPrice).toFixed(2)}</h1>
                            {/* <button
                                onClick={() => navigate('/shop')}
                                className='Continue-Shopping'>{t('cart.goToShopButton')}</button> */}
                        </div>
                    </div>
                </motion.div>
            ) : (
                <div className="notfound-container">
                    <h1 className="notfound-title">{t('notFound.title')}</h1>
                    <h3 className="notfound-message">{t('notFound.message')}</h3>
                    <button
                        onClick={() => navigate('/shop')}
                        className="go-to-shop-btn">
                        {t('notFound.button')}
                    </button>
                </div>
            )}
        </>
    );
};

export default OrderInfo;
