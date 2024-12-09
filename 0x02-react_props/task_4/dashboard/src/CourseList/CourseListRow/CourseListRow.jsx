import React from "react";
import PropTypes from "prop-types";

function CourseListRow({
  isHeader = false,
  textfirstCell,
  textsecondCell = null,
}) {
  const left = { textAlign: "left" };
  // console.log("Course List Row");
  return (
    <tr>
      {isHeader ? (
        textsecondCell === null ? (
          <th colSpan="2">{textfirstCell}</th>
        ) : (
          <>
            <th style={left}>{textfirstCell}</th>
            <th style={left}>{textsecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textfirstCell}</td>
          <td>{textsecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textfirstCell: PropTypes.string.isRequired,
  textsecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
