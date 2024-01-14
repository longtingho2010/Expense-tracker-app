import React from "react";
import { View, Text } from "react-native";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutPut";
import { ExpensesContext, useExpense } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpense = () => {
  const { expenses } = useExpense();
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7daysAgo;
  });
  return (
    <ExpensesOutPut
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses in the last 7 days"
    />
  );
};

export default RecentExpense;
