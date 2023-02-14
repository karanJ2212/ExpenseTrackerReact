import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  // const [enteredTitle, setenteredTitle] = useState("");
  // const [enteredAmount, setenteredAmount] = useState("");
  // const [enteredDate, setenteredDate] = useState("");
  const [userInput, setUserinpt] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    // setUserinpt({ ...userInput, enteredTitle: event.target.value });
    setUserinpt((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserinpt({ ...userInput, amount: event.target.value });
  };
  const dateChangeHandler = (event) => {
    setUserinpt({ ...userInput, date: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("inExpenseForm", userInput);
    props.onsaveExpenseData(userInput);
    setUserinpt({ title: "", amount: "", date: "" });
  };

  return (
    <form action="submit" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            onChange={dateChangeHandler}
            min="2008-01-01"
            maz="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense-action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
