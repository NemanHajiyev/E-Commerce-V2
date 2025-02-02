import React, { useState } from 'react';
import '../Styles/Checkout.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaDeleteLeft } from 'react-icons/fa6';
import { removeBasketItem } from '../Redux/cartSlice';
import { MdErrorOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { favorieDelete, notifyError2 } from '../React-Toastify/Toastify'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


const CheckoutPage = ({ setOrderData, orderData, registerInfo }) => {
    const { t } = useTranslation();

    const { products, totalPrice } = useSelector((store) => store.cart);
    const [cartModal, setCartModal] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const registerInfoLenght = Object.values(registerInfo)

    const [shippingInfo, setShippingInfo] = useState({
        fullName: "",
        email: "",
        phoneNumber: '',
        country: "",
        city: '',
        state: '',
        zipcode: '',
        shippingadress: orderData.shippingadress,
        cardHolder: "",
        cardNumber: "",
        expiry: "",
        cvc: ""
    });

    const OrderSummary = () => {
        const shipValue = Object.values(shippingInfo);
        if (registerInfoLenght.length === 0) {
            alert(t("loginpls"))
            navigate('/login');
            return;
        }

        if (!cartModal) {
            const filteredValue = shipValue.slice(0, 7);
            const filtered = filteredValue.some(item => item.length === 0);
            if (!filtered) {
                setOrderData({ shippingInfo });
                navigate('/order-info');
            } else {
                notifyError2(t);
            }
        }

        else {
            const isAnyFieldEmpty = shipValue.some(item => item.length === 0);
            if (!isAnyFieldEmpty) {
                setOrderData(shippingInfo);
                navigate('/order-info');
            } else {
                notifyError2();
            }
        }
    };

    const removeItem = (id) => {
        dispatch(removeBasketItem({ id }));
        favorieDelete(t)
    };

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            className='checkout'>
            <div className='checkout-header'>
                <h1>Checkout</h1>
            </div>
            <div className='checkout-container'>
                <div className='checkout-left'>
                    <div className='shipping-info'>
                        <h2>{t('shipping.infoTitle')}</h2>
                        <div className='button-group'>
                            <button className='btn' onClick={() => setCartModal(true)}>{t('shipping.cartButton')}</button>
                            <button className='btn' onClick={() => setCartModal(false)}>{t('shipping.cashButton')}</button>
                        </div>
                    </div>

                    <div className='user-info'>
                        <form>
                            <label>{t('shipping.fullName')}</label>
                            <input
                                type='text'
                                placeholder={t('shipping.fullName')}
                                onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                                value={shippingInfo.fullName}
                            />

                            <label>{t('shipping.email')}</label>
                            <input
                                type='email'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                                value={shippingInfo.email}
                                placeholder={t('shipping.email')}
                            />

                            <label>{t('shipping.phone')}</label>
                            <input
                                type='number'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, phoneNumber: e.target.value })}
                                value={shippingInfo.phoneNumber}
                                placeholder={t('shipping.phone')}
                            />

                            <label>{t('shipping.country')}</label>
                            <input
                                type='text'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                                value={shippingInfo.country}
                                placeholder={t('shipping.country')}
                            />

                            <label>{t('shipping.shippingAddress')}</label>
                            <input type='text'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, shippingadress: e.target.value })}
                                value={shippingInfo.shippingadress}
                                placeholder='Enter your country' />
                        </form>
                    </div>
                    <div className='user-address'>
                        <div>
                            <label>{t('shipping.city')}</label>
                            <input
                                type='text'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                                value={shippingInfo.city}
                                placeholder={t('shipping.city')}
                            />
                        </div>

                        <div>
                            <label>{t('shipping.state')}</label>
                            <input
                                type='text'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                                value={shippingInfo.state}
                                placeholder={t('shipping.state')}
                            />
                        </div>

                        <div>
                            <label>{t('shipping.zipcode')}</label>
                            <input
                                type='number'
                                onChange={(e) => setShippingInfo({ ...shippingInfo, zipcode: e.target.value })}
                                value={shippingInfo.zipcode}
                                placeholder={t('shipping.zipcode')}
                            />
                        </div>
                    </div>


                    {cartModal ? (
                        <div className='debit-cart'>
                            <div className='cart-container'>
                                <div className='cart-info'>
                                    <p>{t('shipping.cardHolder')}</p>
                                    <input
                                        onChange={(e) => setShippingInfo({ ...shippingInfo, cardHolder: e.target.value })}
                                        value={shippingInfo.cardHolder}
                                        type="text"
                                    />

                                    <p>{t('shipping.cardNumber')}</p>
                                    <input
                                        onChange={(e) => setShippingInfo({ ...shippingInfo, cardNumber: e.target.value })}
                                        value={shippingInfo.cardNumber}
                                        type="text"
                                    />
                                </div>

                                <div className='cart-date'>

                                    <div>
                                        <p>{t('shipping.expiry')}</p>
                                        <input
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, expiry: e.target.value })}
                                            value={shippingInfo.expiry}
                                            type="month"
                                        />
                                    </div>

                                    <div>
                                        <p>{t('shipping.cvc')}</p>
                                        <input
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, cvc: e.target.value })}
                                            value={shippingInfo.cvc}
                                            type="password" maxLength={3}
                                        />
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
                                <h3>{t('cart.emptyTitle')}</h3>
                                <button className='btn-primary' onClick={() => navigate('/shop')}>
                                    {t('cart.goToShopButton')}
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
                                        {t('cart.totalPrice')}: ${(totalPrice).toFixed(2)}
                                    </h2>
                                </div>
                                <button className='btn btn-primary' onClick={OrderSummary}>{t('cart.order')}</button>
                            </>
                        )
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default CheckoutPage

