import { Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ErrorItem = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.errormsg}>Sorry Something went wrong</Text>
      <Feather name={"frown"} size={100} color={"white"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  errormsg: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    marginHorizontal: 10,
  },
});

export default ErrorItem;
