import React, { useEffect, useState } from 'react';
import '../Styles/Product-detail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaBackward, FaStar } from 'react-icons/fa';
import { addToFavorie } from '../Redux/productSlice';
import { addToBaket, } from '../Redux/cartSlice';
import { productAddToasty } from '../React-Toastify/Toastify';



const ProductDTL = () => {
    const { id } = useParams();
    const { products } = useSelector((store) => store.product);
    const [product, setProduct] = useState();
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const newProduct = products.find((product) => product.id === parseInt(id));
        if (newProduct) {
            setProduct(newProduct);
        }
    }, []);

    const inc = () => {
        setCount(count + 1)
    }

    const dec = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const addtoFavorie = () => {
        dispatch(addToFavorie(product));
    }

    const addtoBasket = () => {
        for (let i = 1; i <= count; i++) {
            dispatch(addToBaket(product));
        }
        productAddToasty()
    };



    return (
        <div className='detail'>

            {
                product ? (
                    <div className='detail-container'>
                        <div className='detail-img'>
                            <img src={product.image} />
                        </div>

                        <div className='detail-info'>
                            <h1>{product.name}</h1>
                            <p>Lorem ipsum dolor sit amet.</p>

                            <div className='star-icon'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quidem quisquam tempora iste dignissimos mollitia impedit odit accusantium ea cumque, asperiores laborum, necessitatibus possimus delectus quis deleniti nobis eligendi culpa!
                            </p>
                            <div className='shop-icon'>
                                <button onClick={addtoFavorie}>Add To favorie</button>
                                <button onClick={addtoBasket} style={{ backgroundColor: "brown" }}>Add To Cart</button>
                            </div>
                            <div className='detail-count'>
                                <button onClick={() => inc()}>+</button>
                                <span>{count}</span>
                                <button onClick={() => dec()}>-</button>
                            </div>
                            <div
                                onClick={() => navigate('/shop')}
                                className='detail-bottom'>
                                <h1>Price : ${(count * (product.price)).toFixed(2)}</h1>
                                <h2>Shop<FaBackward color='brown' /> </h2>
                            </div>
                        </div>

                    </div>

                ) : (
                    null
                )
            }
        </div>
    );
};

export default ProductDTL;
