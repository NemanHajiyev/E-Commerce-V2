import React from 'react'
import { infoSectionData } from '../MockData/mockData';
import '../Styles/infoSection.css'

const infoSection = () => {
    return (
        <div className='infosection'>

            {infoSectionData?.map((data, index) => (
                <div className='info-div' key={index}>
                    <div className='icon'>{data.icon}</div>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div >
            ))}

        </div >
    )
}

export default infoSection