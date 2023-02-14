import React from "react";
import "./NewExpense.css";
import { v4 as uuid } from "uuid";

import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: uuid(),
    };
    console.log("in newExpense", expenseData);
    props.onnewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onsaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}
