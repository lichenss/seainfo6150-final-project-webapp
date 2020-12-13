import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Error.module.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <Header />
            <section className={styles.section}>
            <div className={styles.container}>  
            <div className={styles.titleContainer}>
            <h2 className={styles.title}>Error:</h2>
            </div>
            <div className={styles.descriptionContainer}>
            <p>Oooops, something went wrong.</p>
            </div>
            <Link to='/'>Click here to return to the home page</Link>
            </div>
                </section>
            <Footer />
        </>
    )
}

export default Error
