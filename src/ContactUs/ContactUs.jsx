import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './ContactUs.module.css'
import { useHistory } from 'react-router-dom'

const ContactUs = () => {
    
    const history = useHistory()
    const handleSubmit=()=>{history.push('/thank-you')}
    return (
        <div>
            <Header />
            <section className={styles.section}>
            <div className={styles.container}>  
            <div className={styles.titleContainer}>
            <h2 className={styles.title}>Contact Us</h2>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                <label className={styles.label}>Name</label>
                <input className={styles.input}
                type="text" required
                />
                </div>
                <div>
                <label className={styles.label}>Email</label>
                <input className={styles.input}
                type="email" required
                />
                </div>
                <div>
                <label className={styles.label}>Content:</label>
                <input className={styles.input}
                type="text" required
                />
                </div>
                <button className={styles.button} type="submit"> Submit</button>
            </form>
            </div>
            </section>
            <Footer />
        </div>
    )
}
export default ContactUs