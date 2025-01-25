import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Basket.css'
import { FaDeleteLeft, FaMinus, FaPlus } from 'react-icons/fa6';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { removeBasketItem } from '../Redux/cartSlice';

const Cart = () => {
    const { products, totalQnty, totalPrice } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

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
                            <FaPlus />
                            <FaMinus />
                        </div>
                        <FaDeleteLeft
                            onClick={() => removeItem(product.id)}
                            className='delete-icon'
                        />
                    </div>
                ))}
                <h1>{totalPrice}</h1>
            </div>

            <div className='cart-right'>
                <div>
                    <h1>Cart Totals</h1>
                    <h3>Totoal Items : </h3>
                </div>
                <div>
                    <h1>Shipping:</h1>
                    <p>Shipping to :{shipping}</p>
                    <button onClick={openModal}>Change Shipping Adress</button>
                </div>
                <div>
                    <h1>Total Price:</h1>
                </div>
            </div>

            {
                modal ? <div className='modal'>
                    <input type="text" value={newAdress} onChange={(e) => setNewAdress(e.target.value)} />
                    <div className='buttons'>
                        <button onClick={closeModal}>Cancel</button>
                        <button onClick={saveAdress}>Save Adress</button>
                    </div>
                </div> : null
            }
        </div>
    );
}

export default Cart;
