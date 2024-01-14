import React, { useContext } from "react";
import { View, Text } from "react-native";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutPut";
import { ExpensesContext, useExpense } from "../store/expenses-context";

const AllExpenses = () => {
  const { expenses } = useExpense();
  return (
    <ExpensesOutPut
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No expenses found"
    />
  );
};

export default AllExpenses;
