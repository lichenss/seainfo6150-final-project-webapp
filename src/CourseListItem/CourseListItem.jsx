import React from 'react';
import styles from './CourseListItem.module.css';
import { Link } from 'react-router-dom';

const CourseListItem = (props) => {
    var data={
        title:props.course.title,
        imgurl:props.course.image._url,
        description:props.course.description,
        instructor:props.course.instructor
    };
    

    return (
        <li className={styles.course}>
            <Link
                className={styles.link}
                to={{
                    pathname: `/category/${props.category}/course/${props.course.slug}`,
                    state:data,
                }}
            >
                <div className={styles.imageBlock}>
                    <img
                        className={styles.image}
                        src={props.course.image._url}
                        alt={`${props.course.title}`}
                    />
                </div>
                <div className={styles.courseInfoBlock}>
                    <h3 className={styles.title}>{props.course.title}</h3>
                </div>
            </Link>
        </li>
    );
};
export default CourseListItem