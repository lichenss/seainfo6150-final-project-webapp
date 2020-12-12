import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import CourseList from "../CourseList/CourseList";
import styles from "./Category.module.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Category = (props) => {
    const [fetchedData, setFetchedData] = useState();
    useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("https://demo8942208.mockable.io/"+props.categoryLink);
      const responseJson = await response.json();
      setFetchedData(Object.values(responseJson));
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

    return isEmpty(fetchedData) ? null :(
        <>
            <Header/>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.block}></div>
                    <div className={styles.headLineContainer}>
                        <h1 className={styles.headLine}>
                            {props.categoryLink}
                        </h1>
                    </div>
                    <CourseList
                        categoryName={props.categoryLink}
                        courses={fetchedData}
                    />
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Category
