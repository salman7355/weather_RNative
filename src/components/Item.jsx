import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utils/weatherType";
import moment from "moment/moment";

const Item = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather
        name={weatherType[condition.main]?.icon}
        size={20}
        color="white"
      />
      <Text style={styles.temp}> {condition.description} </Text>
      <View style={styles.datetime}>
        <Text style={styles.date}> {moment(dt_txt).format("dddd")} </Text>
        <Text style={styles.date}> {moment(dt_txt).format("h:mm:ss a")} </Text>
      </View>
      <Text style={styles.temp}>
        {`${Math.round(max)}°`}/{`${Math.round(min)}°`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginHorizontal: 8,
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "indianred",
    gap: 30,
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  datetime: {
    flexDirection: "column",
  },
});

export default Item;
