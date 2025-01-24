import React from 'react';
import "../Styles/Home.css";
import { Categories } from '../Assets/mockData';
import HeroImage from '../Assets/Images-main/hero-page.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-category'>
                <h2>Shop By Categories</h2>
                <ul className='ul-list'>
                    {Categories?.map((category, index) => (
                        <li className='list' key={index}>{category}</li>
                    ))}
                </ul>

            </div>

            <div className='home-banner'>
                <img src={HeroImage} className='image' />
                <div className='banner-detail'>
                    <p>Code With Neman :)</p>
                    <h2>Welcome To E-Shop </h2>
                    <p>Millions + Products</p>
                    <button>Shop Now</button>
                </div>
            </div>


        </div>
    )
}

export default Home
