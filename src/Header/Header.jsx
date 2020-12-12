import React from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
    const history = useHistory()

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.navbar}>
                <button className={styles.logo} onClick={() => {history.push('/')}}></button>
                <div>
                <Link className={styles.catLink} to='/computer-science'>Computer Science</Link>
                <Link className={styles.catLink} to='/business'>Business</Link>
                <Link className={styles.catLink} to='/data-science'>Data Science</Link>
                <Link className={styles.catLink} to='/arts-and-humanities'>Arts and Humanities</Link>
                <Link className={styles.catLink} to='/physical-science-and-engineering'>Physical Science and Engineering</Link>
                <Link className={styles.catLink} to='/math-and-logic'>Math and Logic</Link>
                </div>
                    <div className={styles.links}>
                        {!props.LoggedIn && (
                            <Link className={styles.barLink} to="/log-in">
                                Log In
                            </Link>
                        )}
                        {!props.LoggedIn && (
                            <Link className={styles.barLink} to="/sign-up">
                                Sign Up
                            </Link>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;