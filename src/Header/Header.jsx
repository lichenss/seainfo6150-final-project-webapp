import React from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const history = useHistory()

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.navbar}>
                <button className={styles.logo} onClick={() => {history.push('/')}}></button>
                <div>
                <Link className={styles.catLink} to='/category/computer-science'>Computer Science</Link>
                <Link className={styles.catLink} to='/category/business'>Business</Link>
                <Link className={styles.catLink} to='/category/data-science'>Data Science</Link>
                <Link className={styles.catLink} to='/category/arts-and-humanities'>Arts and Humanities</Link>
                <Link className={styles.catLink} to='/category/physical-science-and-engineering'>Physical Science and Engineering</Link>
                <Link className={styles.catLink} to='/category/math-and-logic'>Math and Logic</Link>
                </div>
                    <div className={styles.links}>
                            <Link className={styles.barLink} to="/log-in">
                                Log In
                            </Link>                      
                            <Link className={styles.barLink} to="/sign-up">
                                Sign Up
                            </Link>
                        
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;