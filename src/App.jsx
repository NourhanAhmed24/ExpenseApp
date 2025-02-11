import { useState, useEffect } from "react";
// import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseAddForm from "./components/ExpenseAddForm";

function App() {
  // Load expenses from localStorage or set an initial default list
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [
          {
            id: 1,
            description: "2 packs of bread",
            amount: 60,
            category: "bakery",
          },
          {
            id: 2,
            description: "1 KG of meat",
            amount: 300,
            category: "meat",
          },
          {
            id: 3,
            description: "2 liter of milk",
            amount: 100,
            category: "dairy products",
          },
          {
            id: 4,
            description: "1 bottle of orange juice",
            amount: 70,
            category: "beverage",
          },
          {
            id: 5,
            description: "1 pack of frozen carrots",
            amount: 50,
            category: "frozen food",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filterExpenses = (selectedCategory) => {
    setExpenses(
      expenses.filter((expense) => expense.category === selectedCategory)
    );
  };

  const addExpense = (data) => {
    setExpenses((prevExpenses) => [...prevExpenses, data]);
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/src/images/background2.webp")',
        backgroundSize: "cover",
        paddingTop: "100px",
        paddingBottom: "10px",
      }}
    >
      <h1
        style={{
          fontFamily: "Pacifico, sans-serif",
          paddingBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "12px",
          background: "white",
          width: "1000px",
          marginLeft: "200px",
          textAlign: "center",
          color: "rgb(239, 112, 90)",
        }}
      >
        Grocery Expense Tracker App
      </h1>

      <div className="mt-10">
        <div
          className="container"
          style={{ backgroundColor: "white", borderRadius: "12px" }}
        >
          <div className="row">
            <div className="col-12 col-md-4 mb-3 mt-3">
              <ExpenseAddForm addExpense={addExpense} />
              <ExpenseFilter filterExpenses={filterExpenses} />
            </div>

            <div className="col-12 col-md-8 mt-3">
              <ExpenseList items={expenses} deleteExpense={deleteExpense} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
