import React from 'react'
import styles from './CategoryList.module.css'
import computerscienceImg from '../images/computer_science.jpg';
import businessImg from '../images/business.jpg';
import datascienceImg from '../images/data_science.jpg';
import artsandhumanitiesImg from '../images/arts_and_humanities.jpg';
import physicalscienceandengineeringImg from '../images/physical_science_and_engineering.jpg';
import mathandlogicImg from '../images/math_and_logic.jpg';
import CategoryListItem from '../CategoryListItem/CategoryListItem';

const categories = [
    {
        slug: 0,
        categoryName: 'Computer Science',
        categoryLink:'computer-science',
        imageURI: computerscienceImg,
    },
    {
        slug: 1,
        categoryName: 'Business',
        categoryLink:'business',
        imageURI: businessImg,
    },
    {
        slug: 2,
        categoryName: 'Data Science',
        categoryLink:'data-science',
        imageURI: datascienceImg,
    },

    {
        slug: 3,
        categoryName: 'Arts and Humanities',
        categoryLink:'arts-and-humanities',
        imageURI: artsandhumanitiesImg,
    },
    {
        slug: 4,
        categoryName: 'Physical Science and Engineering',
        categoryLink:'physical-science-and-engineering',
        imageURI: physicalscienceandengineeringImg,
    },
    {
        slug: 5,
        categoryName: 'Math and Logic',
        categoryLink:'math-and-logic',
        imageURI: mathandlogicImg,
    },
];
const CategoryList = () => {
    return (
        <div className={styles.section}>
        <ul className={styles.container}>
            {categories.map((category) => (
                <CategoryListItem category={category} key={category.slug} />
            ))}
        </ul>
        </div>
    )
}
export default CategoryList