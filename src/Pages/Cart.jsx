import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Basket.css'
import { FaDeleteLeft, FaMinus, FaPlus } from 'react-icons/fa6';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { decrement, increment, removeBasketItem } from '../Redux/cartSlice';

const Cart = () => {
    const { products, totalQnty, totalPrice } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [shipping, setShipping] = useState("Azerbaijan , Baku")
    const [modal, setModal] = useState(false)
    const [newAdress, setNewAdress] = useState(shipping)

    const removeItem = (id) => {
        dispatch(removeBasketItem({ id }));
    };

    const openModal = () => {
        setModal(true)

    }

    const closeModal = () => {
        setModal(!modal)
        setNewAdress(shipping)
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
        dispatch(increment({ id: product.id }))
    }


    const dec = (product) => {
        if (product.quantity > 1) {
            dispatch(decrement({ id: product.id }))
        }
    }



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
                        <div>
                            <FaPlus onClick={() => inc(product)} />
                            <FaMinus onClick={() => dec(product)} />
                        </div>
                        <FaDeleteLeft
                            onClick={() => removeItem(product.id)}
                            className='delete-icon'
                        />
                    </div>
                ))}
            </div>

            <div className='cart-right'>
                <div className='cart-section'>
                    <h3>Cart Totals</h3>
                    <p>Totoal Items : {totalQnty}</p>
                </div>
                <div className='cart-section'>
                    <h3>Shipping</h3>
                    <p>Shipping to : {shipping}</p>
                    <button onClick={openModal}>Change Shipping Adress</button>
                </div>
                <div className='cart-section'>
                    <h2>Total Price: <span style={{ color: "red" }}>${(totalPrice).toFixed(2)}</span></h2>
                </div>
                <div>
                    <button
                        onClick={() => navigate("/checkout-page")}
                        className='checkout-btn'>
                        Procced Checkout
                    </button>
                </div>
            </div>

            {
                modal ? <div className='modal'>
                    <input type="text" value={newAdress} onChange={(e) => setNewAdress(e.target.value)} />
                    <div className='buttons'>
                        <button onClick={closeModal}>Cancel</button>
                        <button onClick={saveAdress} style={{ backgroundColor: "rgb(0, 182, 243)" }}>Save Adress</button>
                    </div>
                </div> : null
            }
        </div >
    );
}

export default Cart;
