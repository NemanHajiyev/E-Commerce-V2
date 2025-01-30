import React from 'react'
import auto from '../Assets/images/auto-7.webp';
import WomensCtgry from '../Assets/images/auto-3.webp';
import kidsCtgry from '../Assets/images/auto-3.webp';
import '../Styles/CategorySection.css';


const CategorySection = () => {
    const data = [
        {
            title: "auto",
            image: auto
        },
        {
            title: "Womens",
            image: WomensCtgry
        },
        {
            title: "Kids",
            image: kidsCtgry
        }
    ];

    return (
        <div className="category-section">
            {data?.map((item, index) => (
                <div className="category-info" key={index}>
                    <img src={item.image} alt={item.title} />
                    <div className="category-detail">
                        <p>{item.title}</p>
                        <button>View All</button>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default CategorySection
