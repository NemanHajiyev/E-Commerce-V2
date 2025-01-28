import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We're here to help! Reach out to us for any inquiries, feedback, or support.</p>
            </div>

            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your full name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email address" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Write your message here" rows="5"></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>

            <div className="contact-info">
                <h2>Our Contact Information</h2>
                <p><strong>Email:</strong> support@yourstore.com</p>
                <p><strong>Phone:</strong> +1 (800) 123-4567</p>
                <p><strong>Address:</strong> 123 E-Commerce St, Shopville, USA</p>
            </div>
        </div>
    );
};

export default Contact;
