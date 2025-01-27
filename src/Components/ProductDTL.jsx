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
        return (
            <div>Olmadi be abi</div>
        )

    }, [id, products]);

    return (
        <div className='detail'>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
        </div>
    );
};

export default ProductDTL;
