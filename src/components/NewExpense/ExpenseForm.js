import React from "react";
import "./ExpenseForm.css";
export default function ExpenseForm() {
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2008-01-01" maz="2023-12-31" />
        </div>
      </div>
      <div className="new-expense-action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
