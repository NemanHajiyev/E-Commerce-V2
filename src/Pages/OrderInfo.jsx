import React from 'react';
import '../Styles/OrderInfo.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const OrderInfo = ({ orderData }) => {
    const { t } = useTranslation();
    const { products, totalPrice } = useSelector((store) => store.cart);
    const navigate = useNavigate();

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            className="order-info-container">
            <Confetti width={1500} height={1000} />
            <h1 className="order-summary-title">{t('shipping.title')}</h1>
            <div className="order-summary-card">
                <div className="order-section">
                    <h2 className="section-title">{t('shipping.infoTitle')}</h2>
                    <p><span>{t('shipping.fullName')}</span>: {orderData.fullName}</p>
                    <p><span>{t('shipping.email')}</span>: {orderData.email}</p>
                    <p><span>{t('shipping.phone')}</span>: {orderData.phoneNumber}</p>
                </div>

                <div className="order-section">
                    <h2 className="section-title">{t('shipping.shippinginfo')}</h2>
                    <p><span>{t('shipping.country')}</span>: {orderData.country}</p>
                    <p><span>{t('shipping.city')}</span>: {orderData.city}</p>
                    <p><span>{t('shipping.state')}</span>: {orderData.state}</p>
                    <p><span>{t('shipping.zipcode')}</span>: {orderData.zipcode}</p>
                    <p><span>{t('shipping.shippingAddress')}</span>: {orderData.shippingadress}</p>
                </div>
                <div>
                    {products?.map((product) => (
                        <div className='order-info'>
                            <p>{t('shipping.productname')}: {product.name} x {product.quantity}</p>
                            <h3>${(product.quantity * product.price).toFixed(2)}</h3>
                        </div>
                    ))}
                    <hr />
                    <h1>{t('cart.totalPrice')}: ${(totalPrice).toFixed(2)}</h1>
                    <button
                        onClick={() => navigate('/shop')}
                        className='Continue-Shopping'>{t('cart.goToShopButton')}</button>
                </div>
            </div>
        </motion.div>

    );
};

export default OrderInfo;