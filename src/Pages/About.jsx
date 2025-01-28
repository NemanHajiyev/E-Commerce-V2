import React from 'react';
import '../Styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
                <p>We bring the best shopping experience right to your doorstep.</p>
            </div>

            <div className="about-section">
                <h2>Who We Are</h2>
                <p>We are a leading e-commerce platform dedicated to offering high-quality products at the best prices. Our mission is to deliver an exceptional online shopping experience that ensures customer satisfaction with every purchase.</p>
            </div>

            <div className="about-section">
                <h2>Our Vision</h2>
                <p>Our vision is to become the go-to destination for all your shopping needs, with a wide range of products, excellent customer service, and unbeatable prices.</p>
            </div>

            <div className="about-section">
                <h2>Why Choose Us?</h2>
                <p>We believe in offering a seamless shopping experience with easy navigation, secure payment methods, fast delivery, and reliable customer support.</p>
            </div>

            <div className="about-footer">
                <p>Thank you for choosing us. Happy shopping!</p>
            </div>
        </div>
    );
};

export default About;
