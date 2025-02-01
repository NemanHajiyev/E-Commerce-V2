import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Basket.css'
import { FaDeleteLeft } from 'react-icons/fa6';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { decrement, increment, removeBasketItem } from '../Redux/cartSlice';
import { favorieDelete } from '../React-Toastify/Toastify';
import { useTranslation } from 'react-i18next';

const Cart = ({ setOrderData, orderData }) => {
    const { t } = useTranslation();

    const { products, totalQnty, totalPrice } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [shipping, setShipping] = useState("Azerbaijan , Baku")
    const [modal, setModal] = useState(false)
    const [newAdress, setNewAdress] = useState(shipping)

    const removeItem = (id) => {
        dispatch(removeBasketItem({ id }));
        favorieDelete()
    };

    const openModal = () => {
        setModal(true)

    }
    const closeModal = () => {
        setModal(!modal)
        setNewAdress(shipping)
    }

    const toOrderPage = () => {
        setOrderData({ ...orderData, shippingadress: newAdress })
        navigate("/checkout-page")
    }

    const saveAdress = () => {
        if (newAdress.trim().length > 0) {
            setShipping(newAdress)
            setModal(!modal)
        } else {
            alert("Please enter an address!")
        }
    }

    const inc = (product) => {
        dispatch(increment(product))
    }


    const dec = (product) => {
        if (product.quantity > 1) {
            dispatch(decrement(product))
        }
    }

    const getProductDetail = (id) => {
        navigate(`/product-detail/${id}`)
    }




    if (products.length === 0) {
        return (
            <div className='emptyCart'>
                <HiOutlineShoppingBag className='empty-icon' />
                <h1>{t('cart.emptyTitle')}</h1>
                <h4>{t('cart.emptyDescription')}</h4>
                <Link to='/shop'>
                    <button>{t('cart.goToShopButton')}</button>
                </Link>
            </div>
        );
    }

    return (
        <div className='cart'>
            <div className='cart-left'>

                {products?.map((product) => (
                    <div className="cart-detail" key={product.id}>
                        <div className='cart-detail1'>
                            <img
                                onClick={() => getProductDetail(product.id)}
                                src={product.image} />
                            <h3 style={{ marginLeft: "20px" }}>{product.name}</h3>
                        </div>
                        <div className='cart-detail2'>
                            <h2>${product.price}</h2>
                            <div className='count-div'>
                                <button onClick={() => inc(product)}>+</button>
                                <h4>{product.quantity}</h4>
                                <button onClick={() => dec(product)}>-</button>
                            </div>
                            <FaDeleteLeft
                                onClick={() => removeItem(product.id)}
                                className='delete-icon'
                            />
                        </div>

                    </div>
                ))}
            </div>

            <div className='cart-right'>
                <div className='cart-section'>
                    <h3>{t('cart.totalsTitle')}</h3>
                    <p>{t('cart.totalItems')} {totalQnty}</p>
                </div>
                <div className='cart-section'>
                    <h3>{t('cart.shippingTitle')}</h3>
                    <p>{t('cart.shippingTo')} {shipping}</p>
                    <button onClick={openModal}>{t('cart.changeShipping')}</button>
                </div>
                <div className='cart-section'>
                    <h2>{t('cart.totalPrice')} <span style={{ color: "red" }}>${(totalPrice).toFixed(2)}</span></h2>
                </div>
                <div>
                    <button onClick={toOrderPage} className='checkout-btn'>
                        {t('cart.checkout')}
                    </button>
                </div>
            </div>

            {
                modal ? <div className='modal'>
                    <input type="text" value={newAdress} onChange={(e) => setNewAdress(e.target.value)} />
                    <div className='buttons'>
                        <button onClick={closeModal}>{t("cart.cancel")}</button>
                        <button onClick={saveAdress} style={{ backgroundColor: "rgb(0, 182, 243)" }}>{t("cart.save")}</button>
                    </div>
                </div> : null
            }
        </div >
    );
}

export default Cart;
