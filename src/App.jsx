import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseAddForm from "./components/ExpenseAddForm";

function App() {
  const [expenses, setExpenses] = useState([
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
  ]);
  const [count, setCount] = useState(0);

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    console.log("hi");
  };

  const filterExpenses = (selectedCategory) => {
    console.log("hiiii");
    setExpenses(
      expenses.filter((expense) => expense.category == selectedCategory)
    );
  };

  const addExpense = (data) => {
    console.log(data);
    console.log(expenses);
    setExpenses(() => [...expenses, data]);
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/src/images/background2.webp")',
        backgroundSize: "cover",
        // display: "grid",
        //placeItems: "center",
        paddingTop: "100px",
        paddingBottom: "10px",
      }}
    >
      <h1
        className=""
        style={{
          fontFamily: "Pacifico",
          sansSerif: "sans-serif",
          // paddingLeft: "250px",
          paddingBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "12px",
          borderCollapse: "separate",
          borderColor: "white",
          background: "white",
          // overflow: "hidden",
          width: "1000px",
          alignContent: "center",
          marginLeft: "200px",
          textAlign: "center",
          color: "rgb(239, 112, 90)",
        }}
      >
        Grocery Expense Tracker App
      </h1>
      <div className="mt-10">
        <div
          className=" container "
          style={{ backgroundColor: "white", borderRadius: "12px" }}
        >
          <div className="row">
            <div className=" col-12 col-md-4 mb-3 mt-3">
              <ExpenseAddForm addExpense={addExpense}></ExpenseAddForm>
              <ExpenseFilter filterExpenses={filterExpenses}></ExpenseFilter>
            </div>

            <div className="col-12 col-md-8 mt-3">
              <ExpenseList
                items={expenses}
                deleteExpense={deleteExpense}
              ></ExpenseList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
