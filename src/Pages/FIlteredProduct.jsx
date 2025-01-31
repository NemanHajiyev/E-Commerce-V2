import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { Link } from 'react-router-dom'
import { BiError } from 'react-icons/bi'

const FIlteredProduct = () => {
    const { filterProduct } = useSelector((store) => store.product)
    return (
        <div className='products' style={{ display: "flex", justifyContent: "center", gap: "14px" }}>

            {
                filterProduct.length === 0 ? (

                    <div className='emptyCart'>
                        <BiError className='empty-icon' />
                        <h1>Product not found</h1>
                        <Link to='/shop'><button>Go To Shopping</button></Link>
                    </div>
                ) : (
                    filterProduct?.map((product, index) => (
                        <Product getData={product} key={index} />
                    ))
                )
            }
        </div>
    )
}

export default FIlteredProduct
