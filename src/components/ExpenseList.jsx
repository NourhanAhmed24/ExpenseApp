import React from "react";

const ExpenseList = ({ items, deleteExpense }) => {
  return (
    <>
      <div className="mb-3">
        <h4 style={{ color: "rgb(239, 112, 90)" }}>Expenses:</h4>
      </div>
      <table
        className="table"
        style={{
          border: "1px solid #ccc",
          borderRadius: "12px",
          borderCollapse: "separate",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>${item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteExpense(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3 className="" style={{ color: "rgb(24, 169, 106)" }}>
          Total Amount: $
          {items
            .reduce((total, item) => total + parseInt(item.amount), 0)
            .toFixed(2)}
        </h3>
      </div>
    </>
  );
};

export default ExpenseList;
