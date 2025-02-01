import React from 'react';
import { useTranslation } from 'react-i18next';
import { infoSectionData } from '../MockData/mockData';
import '../Styles/infoSection.css';

const InfoSection = () => {
    const { t } = useTranslation();

    return (
        <div className='infosection'>
            {infoSectionData.map((data, index) => (
                <div className='info-div' key={index}>
                    <div className='icon'>{data.icon}</div>
                    <h3>{t(data.titleKey)}</h3>
                    <p>{t(data.descriptionKey)}</p>
                </div>
            ))}
        </div>
    );
};

export default InfoSection;
