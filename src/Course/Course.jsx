import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Course.module.css'
import { Link } from 'react-router-dom';

const Course = (props) => {
    var data=props.location.state;
    var {title,imgurl,description,instructor}=data;
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
            <h1 className={styles.title}>{data.title}</h1>
        </div>
        <div className={styles.instrcutorContainer}>
            <h3>Instructor:</h3>
            <p className={styles.content}>{data.instructor}</p>
        </div>
        <div className={styles.descriptionContainer}>
            <h3>Description:</h3> 
            <p className={styles.content}>{data.description}</p>
        </div>
        </div>
        <div className={styles.linkContainer}>
        <Link className={styles.link} to={{
                    pathname: `/registration-confirmation`,
                    state:data,
                }} >Registration</Link>
        </div>
        </section>
        <Footer />
        </>
    )
}
export default Course
