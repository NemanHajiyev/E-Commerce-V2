import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryPr from '../Pages/CategoryPr'
import { useNavigate } from 'react-router-dom'
import { categoryProducts } from '../Redux/productSlice'
import { Categories } from '../MockData/mockData'
import '../Styles/CategoryProducts.css'

const CategoryProduct = () => {
    const { categoryProduct } = useSelector(store => store.product)
    console.log("kateqoriyalar", categoryProduct)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const getCategorie = (category) => {
        dispatch(categoryProducts(category))
        navigate('/category-product')
    }

    return (
        <div >
            <ul className='category-ul'>
                {Categories?.map((category, index) => (
                    <li key={index} onClick={() => getCategorie(category)}>{category}</li>
                ))}
                <button onClick={() => navigate('/')}>Back</button>
            </ul>
            <div className='products'>
                {categoryProduct?.map((product) => (
                    <CategoryPr product={product} />
                ))}
            </div>

        </div>
    )
}

export default CategoryProduct
