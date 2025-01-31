import React from 'react'
import beauty from '../Assets/images/beauty-category.webp';
import sports from '../Assets/images/sports-category.jpg';
import fashion from '../Assets/images/fashion-category.jpeg';
import '../Styles/CategorySection.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { categoryProducts } from '../Redux/productSlice';


const CategorySection = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getCategorie = (category) => {
        dispatch(categoryProducts(category))
        navigate('/category-product')
    }

    const data = [
        {
            title: "Beauty",
            image: beauty
        },
        {
            title: "Sports",
            image: sports
        },
        {
            title: "Fashion",
            image: fashion
        }
    ];

    return (
        <div className="category-section">
            {data?.map((item, index) => (
                <div className="category-info" key={index}>
                    <img src={item.image} alt={item.title} />
                    <div className="category-detail">
                        <p>{item.title}</p>
                        <button onClick={() => getCategorie(item.title)}>View All</button>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default CategorySection
