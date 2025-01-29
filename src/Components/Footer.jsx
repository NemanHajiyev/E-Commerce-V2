import React from 'react'
import '../Styles/Footer.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
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
                        <a href="https://github.com/NemanHajiyev"><FaGithub /></a>
                        <a href="https://www.instagram.com/neman.hv?igsh=MTRoZXViNXp1bmYxNQ=="><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/neman-haciyev"><FaLinkedin /></a>
                    </div>
                    <div className="subscribe">
                        <button>Subscribe</button>
                        <input type="text" placeholder="Your Email..." />
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
