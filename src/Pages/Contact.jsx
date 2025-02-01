import React from 'react';
import '../Styles/Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>{t('contactpage.title')}</h1>
                <p>{t('contactpage.intro')}</p>
            </div>

            <div className="contactpage-form">
                <h2>{t('contactpage.getInTouch')}</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">{t('contactpage.nameLabel')}</label>
                        <input type="text" id="name" placeholder={t('contactpage.namePlaceholder')} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{t('contactpage.emailLabel')}</label>
                        <input type="email" id="email" placeholder={t('contactpage.emailPlaceholder')} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">{t('contactpage.messageLabel')}</label>
                        <textarea id="message" placeholder={t('contactpage.messagePlaceholder')} rows="5"></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>

            <div className="contactpage-info">
                <h2>{t('contactpage.contactInfoTitle')}</h2>
                <p><strong>{t('contactpage.email')}:</strong> support@yourstore.com</p>
                <p><strong>{t('contactpage.phone')}:</strong> +1 (800) 123-4567</p>
                <p><strong>{t('contactpage.address')}:</strong> 123 E-Commerce St, Shopville, USA</p>
            </div>
        </div>
    );
};

export default Contact;
