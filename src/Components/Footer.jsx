import React from 'react'
import '../Styles/Footer.css'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <h1>novaShop</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, deserunt.</p>
                </div>

                <div className="footer-center">
                    <h1>{t('footer.quickLinks')}</h1>
                    <ul>
                        <li><Link to='/'>{t('footer.home')}</Link></li>
                        <li><Link to='/shop'>{t('footer.shop')}</Link></li>
                        <li><Link to='/about'>{t('footer.aboutUs')}</Link></li>
                        <li><Link to='/contact'>{t('footer.contactUs')}</Link></li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h1>{t('footer.followUs')}</h1>
                    <div className="social-icons">
                        <a href="https://github.com/NemanHajiyev"><FaGithub /></a>
                        <a href="https://www.instagram.com/neman.hv?igsh=MTRoZXViNXp1bmYxNQ=="><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/neman-haciyev"><FaLinkedin /></a>
                    </div>
                    <div className="subscribe">
                        <button>{t('footer.subscribe')}</button>
                        <input type="text" placeholder={t('footer.enterEmail')} />
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <h3>&copy; 2025 Neman Hajiyev. {t('footer.allRightsReserved')}</h3>
            </div>
        </div>

    )
}

export default Footer
