import axios from "axios";

const URL =
  "https://react-native-63fb6-default-rtdb.asia-southeast1.firebasedatabase.app";

export const storeExpense = async (expenseData) => {
  const res = await axios.post(URL + "/expenses.json", expenseData);
  const id = res.data.name;
  return id;
};

export const getExpenses = async () => {
  const res = await axios.get(URL + "/expenses.json");

  const expenses = [];

  for (const key in res.data) {
    const expenseObj = {
      id: key,
      amount: res.data[key].amount,
      date: new Date(res.data[key].date),
      description: res.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};

export const updateExpenseData = (id, expenseData) => {
  return axios.put(URL + `/expenses/${id}.json/`, expenseData);
};

export const deleteExpenseData = (id) => {
  return axios.delete(URL + `/expenses/${id}.json/`);
};
