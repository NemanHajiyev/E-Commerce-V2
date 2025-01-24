import React from 'react'
import '../Styles/Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <h1>e-Shop</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, deserunt.</p>
                </div>

                <div className="footer-center">
                    <h1>Quick Links</h1>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h1>Follow Us</h1>
                    <div className="social-icons">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                    <div className="subscribe">
                        <input type="text" placeholder="Your Email..." />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <h3>&copy; 2025 Neman Hajiyev. All rights reserved.</h3>
            </div>
        </div>

    )
}

export default Footer
