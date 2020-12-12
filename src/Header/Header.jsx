import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
    const backBtn = props.back ? (
        <div className={styles.backContainer}>
            <button className={styles.backBtn} onClick={props.back}></button>
        </div>
    ) : (
        <div className={styles.empty}></div>
    );

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.navbar}>
                    {backBtn}
                    <Link className={styles.homeLink} to="/">
                        <h3 className={styles.title}>Course Store</h3>
                    </Link>
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