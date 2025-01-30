import React from 'react';
import "../Styles/Home.css";
import { Categories } from '../MockData/mockData';
import HeroImage from '../Assets/Images-main/hero-page.png';
import InfoSection from "../Components/InfoSection";
import CategorySection from '../Components/CategorySection';
import ProductList from '../Components/ProductList';
import Shop from './Shop';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { categoryProducts } from '../Redux/productSlice';



const Home = () => {
    const dispatch = useDispatch()

    const getCategorie = (category) => {
        dispatch(categoryProducts(category))
        navigate('/category-product')
    }
    const navigate = useNavigate()

    return (
        <div className='home'>
            <div className='home-container'>
                <div className='home-category'>
                    <h2>Shop By Categories</h2>
                    <ul className='ul-list'>
                        {Categories?.map((category, index) => (
                            <li className='list' key={index} onClick={() => getCategorie(category)}>{category}</li>
                        ))}
                    </ul>

                </div>
                <div className='home-banner'>
                    <img src={HeroImage} className='image' />
                    <div className='banner-detail'>
                        <p>Code With Neman :)</p>
                        <h2>Welcome To E-Shop </h2>
                        <p>Millions + Products</p>
                        <button onClick={() => navigate('/shop')}>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='home-sections'>
                <InfoSection />
                <CategorySection />
                <h1 style={{ textAlign: 'center', marginTop: "100px" }}>Top Products</h1>
                <ProductList />
                <h1 style={{ textAlign: 'center', marginTop: "100px" }}>Shop</h1>
                <Shop />
            </div>
        </div>
    )
}

export default Home
