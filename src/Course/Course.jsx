import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Course.module.css'
import { Link } from 'react-router-dom';

const Course = (props) => {
    var data=props.location.state;
    var {title,imgurl,description}=data;
    return (
        <>
        <Header />
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img
                    className={styles.image}
                    src={data.imgurl}
                    alt={data.title}
                    />
                    </div>
        <div className={styles.titleContainer}>
            <h3 className={styles.title}>{data.title}</h3>
        </div>
        <div className={styles.descriptionContainer}>
            <p>{data.description}</p>
        </div>
        </div>
        <div className={styles.linkContainer}>
        <Link className={styles.link} to={'/registration-confirmation'}>Registration</Link>
        </div>
        </section>
        <Footer />
        </>
    )
}
export default Course
