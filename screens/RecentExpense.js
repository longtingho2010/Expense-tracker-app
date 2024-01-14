import React from "react";
import { View, Text } from "react-native";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutPut";

const RecentExpense = () => {
  return <ExpensesOutPut expensesPeriod="Last 7 days" />;
};

export default RecentExpense;
