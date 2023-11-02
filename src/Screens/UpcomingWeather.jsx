import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import Item from "../components/Item";

const UpcomingWeather = ({ weatherData }) => {
  return (
    <ImageBackground
      source={require("../../assets/unsplash.jpg")}
      style={styles.image}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.head}>Upcoming Weather</Text>
        <FlatList
          data={weatherData}
          renderItem={({ item }) => (
            <Item
              dt_txt={item.dt_txt}
              min={item.main.temp_min}
              max={item.main.temp_max}
              condition={item.weather[0]}
            />
          )}
          keyExtractor={(item) => item.dt}
          ListEmptyComponent={<Empty />}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    // backgroundColor: "red",
  },
  head: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "white",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default UpcomingWeather;

const Empty = () => {
  return (
    <View>
      <Text>Empty List</Text>
    </View>
  );
};
