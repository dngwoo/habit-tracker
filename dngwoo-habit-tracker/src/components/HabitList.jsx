import React, { useState } from "react";
import PropTypes from "prop-types";

const HabitList = ({ habit }) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <li className="habites__item">
      <div>{habit}</div>
      <div>{count}</div>
      <button type="button" onClick={addCount}>
        +
      </button>
      <button type="button" onClick={minusCount}>
        -
      </button>
      <button type="button">Delete</button>
    </li>
  );
};

HabitList.propTypes = {
  habit: PropTypes.string.isRequired,
};

export default HabitList;
