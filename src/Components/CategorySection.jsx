import React from 'react'
import MensCtgry from '../Assets/Images-main/man.png';
import WomensCtgry from '../Assets/Images-main/woman.png';
import kidsCtgry from '../Assets/Images-main/kid.png';
import '../Styles/CategorySection.css';


const CategorySection = () => {
    const data = [
        {
            title: "Mens",
            image: MensCtgry
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
