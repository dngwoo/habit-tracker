import React from "react";
import PropTypes from "prop-types";

const HabitList = ({ habit, deleteHabit, addCount, minusCount }) => {
  const onClickDeleteHabit = () => {
    deleteHabit(habit.createdAt);
  };

  const onClickAddCount = () => {
    addCount(habit.createdAt);
  };
  const onClickMinusCount = () => {
    minusCount(habit.createdAt);
  };

  return (
    <li className="habites__item">
      <div>{habit.value}</div>
      <div>{habit.count}</div>
      <button type="button" onClick={onClickAddCount}>
        +
      </button>
      <button type="button" onClick={onClickMinusCount}>
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
    count: PropTypes.number.isRequired,
  }).isRequired,
  deleteHabit: PropTypes.func.isRequired,
  addCount: PropTypes.func.isRequired,
  minusCount: PropTypes.func.isRequired,
};

export default HabitList;
