import React from "react";

const ExpenseFilter = ({ filterExpenses }) => {
  return (
    <>
      <div>
        <h4 className="mb-3" style={{ color: "rgb(239, 112, 90)" }}>
          Filter Items:
        </h4>
      </div>
      <select
        name=""
        id=""
        className="form-select mb-3 w-50"
        onChange={(event) => filterExpenses(event.target.value)}
      >
        <option value=""></option>
        <option value="bakery">Bakery</option>
        <option value="frozen food">Frozen Food</option>
        <option value="beverage">Beverage</option>
        <option value="dairy products">Dairy Products</option>
        <option value="meat">Meat</option>
      </select>
    </>
  );
};

export default ExpenseFilter;
