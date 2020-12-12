import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useHistory } from 'react-router-dom'
import styles from './ThankYou.module.css'

const ThankYou = () => {
    const history = useHistory()
    return (
        <>
            <Header />
            <section className={styles.section}>
            <div className={styles.container}>  
            <div className={styles.titleContainer}>
            <h2 className={styles.title}>Thank you for using my website!</h2>
            </div>
            <button className={styles.button} onClick={() => {history.push('/')}}> Return to Home Page</button>
            </div>
                </section>
            <Footer />
        </>
    )
}
export default ThankYou