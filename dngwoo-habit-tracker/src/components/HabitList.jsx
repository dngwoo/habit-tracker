import React from "react";
import PropTypes from "prop-types";

const HabitList = ({ habit }) => {
  return (
    <li className="habites__item">
      <div>{habit}</div>
      <div>0</div>
      <button type="button">+</button>
      <button type="button">-</button>
      <button type="button">Delete</button>
    </li>
  );
};

HabitList.propTypes = {
  habit: PropTypes.string.isRequired,
};

export default HabitList;
