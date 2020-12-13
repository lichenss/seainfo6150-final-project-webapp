import React from 'react'
import CourseListItem from '../CourseListItem/CourseListItem';
import styles from './CourseList.module.css'


const CourseList = (props) => {
    let displayContent;

    if (props.courses.length) {
      displayContent = (
        <ul className={styles.container}>
          {props.courses.map((course) => (
            <CourseListItem course={course} category={props.categoryName} />
          ))}
        </ul>
      );
    } else {
      displayContent = <div>You have no data!</div>;
    }
  
    return (
      <div className={styles.section}>
        {displayContent}
      </div>
    );
  };
export default CourseList