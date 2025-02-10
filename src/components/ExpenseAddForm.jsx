import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object().shape({
  description: Yup.string()
    .required("This field is required")
    .min(6, "This field requires at least 6 characters"),

  amount: Yup.number()
    .positive("Amount must be a positive number")
    .required("This field is required"),
  category: Yup.string().required("This field is required"),
});

const ExpenseAddForm = ({ addExpense }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form
      className="mb-5"
      onSubmit={handleSubmit((data) => {
        addExpense(data);
        reset();
      })}
    >
      <div className="">
        <h4 style={{ color: "rgb(239, 112, 90)" }}>Add Item:</h4>
      </div>

      <div className="mb-3 w-50 ">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3 w-50">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount")}
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3 w-50">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select" {...register("category")}>
          <option value="">Select a category</option>
          <option value="bakery">Bakery</option>
          <option value="frozen food">Frozen Food</option>
          <option value="beverage">Beverage</option>
          <option value="dairy products">Dairy Products</option>
          <option value="meat">Meat</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button className="btn btn-light">Submit</button>
    </form>
  );
};

export default ExpenseAddForm;
