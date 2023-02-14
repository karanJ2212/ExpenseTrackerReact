import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteryear, setFilteryear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log("expense.js", selectedYear);
    setFilteryear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteryear}
        onChangefilter={filterChangeHandler}
      ></ExpensesFilter>
      {props.items.map((expenses) => (
        <ExpenseItem
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
