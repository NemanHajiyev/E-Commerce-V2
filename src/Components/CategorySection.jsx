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
        <div className='category-section'>
            {data?.map((data, index) => (
                <div className='category-info'>
                    <img src={data.image} alt="" />
                    <p>{data.title}</p>
                </div>
            ))}
        </div>
    )
}

export default CategorySection
