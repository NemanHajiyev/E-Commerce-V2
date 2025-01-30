import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { useSelector } from 'react-redux'
import CategoryPr from '../Pages/CategoryPr'

const CategoryProduct = () => {
    const { categoryProduct } = useSelector(store => store.product)
    console.log("kateqoriyalar", categoryProduct)

    return (
        <div className='products'>
            {categoryProduct?.map((product) => (
                <CategoryPr product={product} />
            ))}
        </div>
    )
}

export default CategoryProduct
