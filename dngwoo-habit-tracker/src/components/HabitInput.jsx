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
      { value: habit, createdAt: String(createdAt), count: 0 },
    ]);
    setHabit("");
    addInput.current.focus();
  };

  const deleteHabit = (createdAt) => {
    setHabits(habits.filter((val) => val.createdAt !== createdAt));
  };

  const addCount = (createdAt) => {
    const index = habits.findIndex((val) => val.createdAt === createdAt);
    setHabits((prevArray) => {
      prevArray[index].count += 1;
      return [...prevArray];
    });
  };

  const minusCount = (createdAt) => {
    const index = habits.findIndex((val) => val.createdAt === createdAt);
    if (habits[index].count > 0) {
      setHabits((prevArray) => {
        prevArray[index].count -= 1;
        return [...prevArray];
      });
    }
  };

  const resetHabitCount = () => {
    setHabits((prevArray) => {
      prevArray.forEach((val) => {
        val.count = 0;
      });
      return [...prevArray];
    });
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
          <HabitList
            habit={val}
            key={val.createdAt}
            deleteHabit={deleteHabit}
            addCount={addCount}
            minusCount={minusCount}
          />
        ))}
      </ul>
      <button type="button" onClick={resetHabitCount}>
        Reset All
      </button>
    </div>
  );
};

export default HabitInput;
