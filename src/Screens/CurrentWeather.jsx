import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utils/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherCondition]?.bgColor },
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.feels}>{`Feels Like ${feels_like}`}° </Text>
        <View style={styles.roww}>
          <Text style={styles.highLow}>{`${temp_max}°/${temp_min}°`} </Text>
        </View>
      </View>
      <View style={styles.bodywrapper}>
        <Text style={styles.desc}>{weather[0]?.description}</Text>
        <Text style={styles.message}>
          {weatherType[weatherCondition]?.message}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  roww: {
    flexDirection: "row",
  },
  temp: {
    fontSize: 48,
  },
  highLow: {
    fontSize: 20,
  },
  feels: {
    fontSize: 30,
  },
  bodywrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  desc: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});

export default CurrentWeather;
