import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'
const Footer = (props) => {
    return (
            <footer>
                 <div className={styles.links}>
                 <Link className={styles.link} to="/contact-us">
                     <h3 >Contact Us</h3>
                     </Link>
                     <Link className={styles.link} to="/about-us">
                         <h3 >About Us</h3>
                    </Link>
                    </div>
            </footer>
    );
};

export default Footer;