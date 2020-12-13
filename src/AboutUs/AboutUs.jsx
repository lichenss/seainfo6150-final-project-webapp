import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './AboutUs.module.css'
const AboutUs = () => {
    return (
        <>
            <Header />
            <section className={styles.section}>
            <div className={styles.container}>  
            <div className={styles.titleContainer}>
            <h2 className={styles.title}>About Us</h2>
            </div>
            <div className={styles.descriptionContainer}>
            <p className={styles.content}>We envision a world where anyone, anywhere can transform their life by accessing the world’s best learning experience.</p>
            <p className={styles.content}>Developer:Chen Liu</p>
            </div>
            </div>
                </section>
            <Footer />
        </>
    )
}
export default AboutUs

        