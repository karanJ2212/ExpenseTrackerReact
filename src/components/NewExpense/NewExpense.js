import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };
  const [isEditing, setisEditing] = useState(false);

  const iseditingHandler = () => {
    setisEditing(true);
  };
  const oncancelHandler = () => {
    setisEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={iseditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          oncancel={oncancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
