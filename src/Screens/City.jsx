import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
  const { name, country, sunset, sunrise } = weatherData;

  return (
    <ImageBackground
      source={require("../../assets/city-bg.jpg")}
      style={styles.imageLayout}
    >
      <SafeAreaView style={styles.container}>
        <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
        <Text style={[styles.countryName, styles.cityText]}>{country}</Text>
        {/* <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={"8000"}
            TextStyle={styles.popText}
          />
        </View> */}
        <View style={[styles.sunWrapper, styles.rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            TextStyle={styles.sunText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format("h:mm:ss a")}
            TextStyle={styles.sunText}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  popText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  sunWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  sunText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
