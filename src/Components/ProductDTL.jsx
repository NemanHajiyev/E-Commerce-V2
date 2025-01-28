import React, { useEffect, useState } from 'react';
import '../Styles/Product-detail.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { FaBasketShopping } from 'react-icons/fa6';
import { FcLike } from 'react-icons/fc';
import { BsEmojiNeutral } from 'react-icons/bs';

const ProductDTL = () => {
    const { id } = useParams();
    const { products } = useSelector((store) => store.product);
    const [product, setProduct] = useState();

    useEffect(() => {
        const newProduct = products.find((product) => product.id === parseInt(id));
        if (newProduct) {
            setProduct(newProduct);
        }

    }, []);

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
                                <FcLike />
                                <FaBasketShopping />
                            </div>
                            <div className='detail-count'>
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>
                            </div>
                            <h1 className='detail-price'>Price : ${product.price}</h1>
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
