import React from 'react';
import '../Styles/About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            <div className="about-header">
                <h1>{t('aboutpage.title')}</h1>
                <p>{t('aboutpage.intro')}</p>
            </div>

            <div className="about-section">
                <h2>{t('aboutpage.whoWeAreTitle')}</h2>
                <p>{t('aboutpage.whoWeAreDesc')}</p>
            </div>

            <div className="about-section">
                <h2>{t('aboutpage.visionTitle')}</h2>
                <p>{t('aboutpage.visionDesc')}</p>
            </div>

            <div className="about-section">
                <h2>{t('aboutpage.whyChooseUsTitle')}</h2>
                <p>{t('aboutpage.whyChooseUsDesc')}</p>
            </div>

            <div className="about-footer">
                <p>{t('aboutpage.footer')}</p>
            </div>
        </div>
    );
};

export default About;
