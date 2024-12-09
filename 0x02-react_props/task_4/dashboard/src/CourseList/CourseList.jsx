import React from "react";
import CourseListRow from "./CourseListRow/CourseListRow";
import "./CourseList.css";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

function CourseList({ listCourses = [] }) {
  // console.log("CourseList", listCourses.length);
  return (
    <table id="CourseList">
      <thead>
        {listCourses.length === 0 ? (
          <CourseListRow
            isHeader={true}
            textfirstCell="No course available yet"
          />
        ) : (
          <>
            <CourseListRow isHeader={true} textfirstCell="Available Courses" />
            <CourseListRow
              isHeader={true}
              textfirstCell="Course name"
              textsecondCell="Credit"
            />
          </>
        )}
      </thead>
      <tbody>
        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textfirstCell={course.name}
            textsecondCell={course.credit}
          />
        ))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
