import React from 'react'
import styles from './Home.module.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CategoryList from '../CategoryList/CategoryList'


/*const Home = () => {
    return (
        <div>
            The home page
            <h1>I changed this homepage</h1>
            <img src={treefrog} alt="tree frog" />
            <Form />
        </div>
    )
}*/
const Home = () => {
    return (
        <div>
            <Header />
            <section className={styles.section}>
                <div>
                <CategoryList />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home
