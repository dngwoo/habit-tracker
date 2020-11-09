import React, { useState } from "react";
import PropTypes from "prop-types";

const HabitList = ({ habit, deleteHabit }) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onClickDeleteHabit = () => {
    deleteHabit(habit.createdAt);
  };

  return (
    <li className="habites__item">
      <div>{habit.value}</div>
      <div>{count}</div>
      <button type="button" onClick={addCount}>
        +
      </button>
      <button type="button" onClick={minusCount}>
        -
      </button>
      <button type="button" onClick={onClickDeleteHabit}>
        Delete
      </button>
    </li>
  );
};

HabitList.propTypes = {
  habit: PropTypes.shape({
    value: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  deleteHabit: PropTypes.func.isRequired,
};

export default HabitList;
