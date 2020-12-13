import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './RegistrationConfirmation.module.css'
import { useHistory } from 'react-router-dom'

const RegistrationConfirmation = (props) => {
    var data=props.location.state;
    var {title,imgurl,description,instructor}=data;
    const history = useHistory()
    const handleSubmit=()=>{history.push('/thank-you')}
    const handleCancel=()=>{history.goBack()}
    return (
        <>
            <Header />
            <section className={styles.section}>
            <div className={styles.container}>  
            <div className={styles.titleContainer}>
            <h2 className={styles.title}>Registration Confirmation</h2>
            </div>
            <div className={styles.titleContainer}>
            <h3 className={styles.title}>Course Name:</h3>
            </div>
            <p className={styles.content}>{data.title}</p>
            <div className={styles.instrcutorContainer}>
            <h3 className={styles.title}>Instructor:</h3>
            <p className={styles.content}>{data.instructor}</p>
        </div>
        <div>
        <button className={styles.button} onClick={handleCancel}> Cancel</button>
            <button className={styles.button} onClick={handleSubmit}> Confirm</button>
            </div>
            </div>
                </section>
            <Footer />
        </>
    )
}
export default RegistrationConfirmation