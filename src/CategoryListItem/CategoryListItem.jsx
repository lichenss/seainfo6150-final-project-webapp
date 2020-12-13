import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CategoryListItem.module.css'

const CategoryListItem = (props) => {
    return (
        <li className={styles.category}>
            <Link to={`/category/${props.category.categoryLink}`}>
            <div className={styles.imageBlock}>
                    <img
                        className={styles.image}
                        src={props.category.imageURI}
                        alt={`${props.category.categoryName}`}
                    />
                </div>
                <h3 className={styles.title}>{props.category.categoryName}</h3>
            </Link>
        </li>
    )
}
export default CategoryListItem