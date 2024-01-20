import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import { useExpense } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import {
  deleteExpenseData,
  storeExpense,
  updateExpenseData,
} from "../util/http";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

const ManageExpense = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const { deleteExpense, updateExpense, addExpense, expenses } = useExpense();

  const selectedExpense = expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  const deleteHandler = async () => {
    setLoading(true);
    try {
      deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (err) {
      setError("please try again later!!");
      setLoading(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    setLoading(true);
    try {
      if (isEditing) {
        updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ ...expenseData, id });
      }
      navigation.goBack();
    } catch (err) {
      setError("Could not save data. Please try again later!!");
      setLoading(false);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  if (error && !loading) {
    return <Error msg={error} onConfirm={errorHandler} />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: "center",
    borderTopColor: GlobalStyles.colors.primary200,
  },
});

export default ManageExpense;
