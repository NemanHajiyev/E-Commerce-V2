import React, { useEffect, useState } from 'react';
import '../Styles/Product-detail.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDTL = () => {
    const { id } = useParams();
    const { products } = useSelector((store) => store.product);
    const [product, setProduct] = useState();

    useEffect(() => {
        const newProduct = products.find((product) => product.id === parseInt(id));
        if (newProduct) {
            setProduct(newProduct);
        }

    }, [id, product]);

    return (
        <div className='detail'>
            {
                product ? (


                    <>
                        <h1>{product.name}</h1>
                        <img src={product.image} alt={product.name} />
                    </>




                ) : (
                    <p>Loading ....</p>
                )
            }
        </div>
    );
};

export default ProductDTL;
