import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-12-31"),
  },
  {
    id: "e2",
    description: "Some video games",
    amount: 39.99,
    date: new Date("2024-01-07"),
  },
  {
    id: "e3",
    description: "Some apples",
    amount: 9.99,
    date: new Date("2024-01-05"),
  },
  {
    id: "e4",
    description: "Some apples",
    amount: 19.99,
    date: new Date("2022-06-05"),
  },
  {
    id: "e5",
    description: "Birthday gift",
    amount: 69.99,
    date: new Date("2023-08-17"),
  },
];

const ExpensesOutPut = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export default ExpensesOutPut;
