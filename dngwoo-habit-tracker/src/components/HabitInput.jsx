import React, { useState, useRef } from "react";
import HabitList from "./HabitList";

const HabitInput = () => {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState("");
  const addInput = useRef(null);

  const onChangeHabit = (e) => {
    setHabit(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const createdAt = new Date().getTime();
    setHabits((prevArray) => [
      ...prevArray,
      { habit, createdAt: String(createdAt) },
    ]);
    setHabit("");
    addInput.current.focus();
  };

  return (
    <div className="habits">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={habit}
          onChange={onChangeHabit}
          ref={addInput}
        />
        <input type="submit" value="add" />
      </form>
      <ul className="habits__list">
        {habits.map((val) => (
          <HabitList habit={val.habit} key={val.createdAt} />
        ))}
      </ul>
      <button type="button">Reset All</button>
    </div>
  );
};

export default HabitInput;
