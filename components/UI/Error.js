import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";
import { GlobalStyles } from "../../constants/styles";

const Error = ({ msg, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!!</Text>
      <Text style={styles.text}>{msg}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    color: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Error;
