import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../Redux/productSlice';
import { mockData } from '../MockData/mockData';
import Product from '../Pages/Product';
import '../Styles/Products.css'


const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products)

    useEffect(() => {
        dispatch(setProducts(mockData))
    }, [])

    return (
        <div className='products'>
            {products?.slice(30, 38).map((product, index) => (
                <Product getData={product} key={index} />
            ))}
        </div>
    )
}

export default ProductList
