import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.regularText}>
        Little Lemon, your local Mediterranean Bistro.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Subscribe");
        }}
      >
        <Text style={styles.buttonText}>NewsLetter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 150,
    justifyContent: "center",
    marginTop: 140,
    marginHorizontal: 100,
  },
  regularText: {
    margin: 40,
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 150,
    backgroundColor: "#2f4f4f",
    padding: 6,
    marginTop: 100,
    marginHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
});

export default WelcomeScreen;
