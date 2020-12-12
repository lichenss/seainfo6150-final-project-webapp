import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './LogIn.module.css'
import { useHistory } from 'react-router-dom'

const LogIn = () => {
    const history = useHistory()
    const handleSubmit=()=>{history.push('/thank-you')}
    return (
        <div>
            <Header />
            <section className={styles.section}>
            <div className={styles.container}>  
            <div className={styles.titleContainer}>
            <h1 className={styles.title}>Log In</h1>
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
                <button className={styles.button} type="submit"> Log In</button>
            </form>
            </div>
            </section>
            <Footer />
        </div>
    )
}
export default LogIn