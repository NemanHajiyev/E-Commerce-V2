import React from 'react';
import "../Styles/Home.css";
import { Categories } from '../MockData/mockData';
import InfoSection from "../Components/InfoSection";
import CategorySection from '../Components/CategorySection';
import ProductList from '../Components/ProductList';
import Shop from './Shop';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { categoryProducts } from '../Redux/productSlice';
//
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SliderComp from '../Components/Slider';
import ToTop from '../BackToTop/ToTop';


const Home = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const getCategorie = (category) => {
        dispatch(categoryProducts(category))
        navigate('/category-product')
    }
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            className='home'>
            <div className='home-container'>
                <div className='home-category'>
                    <h2>{t('category')}</h2>
                    <ul className='ul-list'>
                        {Categories?.map((category, index) => (
                            <li className='list' key={index} onClick={() => getCategorie(t(category.original))}>{t(category.key)}</li>
                        ))}
                    </ul>
                </div>
                <div className='home-banner'>
                    <SliderComp />
                </div>
            </div>
            <div className='home-sections'>
                <InfoSection />
                <CategorySection />
                <h1 style={{ textAlign: 'center', marginTop: "100px" }}>{t('toppr')}</h1>
                <ProductList />
                <h1 style={{ textAlign: 'center', marginTop: "100px" }}>{t('shop')}</h1>
                <Shop />
            </div>
        </motion.div>
    )
}

export default Home
