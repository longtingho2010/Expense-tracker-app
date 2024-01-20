import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutPut";
import { ExpensesContext, useExpense } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

const RecentExpense = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { expenses, setExpenses } = useExpense();

  useEffect(() => {
    const fetchExpense = async () => {
      setLoading(true);
      try {
        const expenses = await getExpenses();
        setExpenses(expenses);
      } catch (error) {
        setError("Could not get expenses!!");
      }
      setLoading(false);
    };
    fetchExpense();
  }, []);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7daysAgo;
  });

  const errorHandler = () => {
    setError(null);
  };

  if (loading) {
    return <Loading />;
  }

  if (error && !loading) {
    return <Error msg={error} onConfirm={errorHandler} />;
  }
  return (
    <ExpensesOutPut
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses in the last 7 days"
    />
  );
};

export default RecentExpense;
