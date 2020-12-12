import React from 'react';
import { Link } from 'react-router-dom';
const Footer = (props) => {
    return (
            <footer>
                    <Link to="/contact-us">
                        <h3 >Contact Us</h3>
                    </Link>
                    <Link to="/about-us">
                        <h3 >About Us</h3>
                    </Link>
            </footer>
    );
};

export default Footer;