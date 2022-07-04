import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import Constants from "expo-constants";

function WelcomeScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Image style={Styles.logo} source={require("../assets/logo.png")}></Image>
      <Image
        style={Styles.myImage}
        source={require("../assets/image.png")}
      ></Image>
      <ImageBackground
        style={Styles.background}
        source={require("../assets/shape.png")}
      ></ImageBackground>
      <Text style={Styles.title}>BANKING APPS</Text>
      <Text style={Styles.Text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt{" "}
      </Text>

      <Pressable
        style={Styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={Styles.login}>LOGIN</Text>
      </Pressable>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#add8e6",
    flex: 1,
    justifyContent: "flex-start",
  },
  logo: {
    // flex: 0.5,
    width: 100,
    height: 100,
    // marginLeft: 400,
    resizeMode: "contain",
    position: "absolute",
    marginLeft: 600,
    marginTop: 50,
  },

  background: {
    flex: 1,
    // justifyContent: 'flex-end',
  },
  myImage: {
    flex: 0.5,
    width: 600,
    height: 800,
    // alignSelf: 'center',
    position: "absolute",
    resizeMode: "contain",
    // justifyContent: 'flex-start',
    alignItems: "center",
    // flexDirection: 'row',
    marginTop: 150,
    // marginBottom: 100,
    marginLeft: 140,
  },
  title: {
    position: "absolute",
    color: "#808000",
    fontWeight: "bold",
    justifyContent: "flex-end",
    fontSize: 55,
    marginTop: 900,
    marginLeft: 250,
    textAlign: "center",
  },
  Text: {
    fontSize: 25,
    textDecorationColor: "#000000",
    justifyContent: "flex-end",
    position: "absolute",
    marginTop: 1000,
    marginLeft: 250,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 1150,
    marginLeft: 250,
    width: 300,
    height: 100,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 4,
    backgroundColor: "#00ffff",
  },
  login: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
export default WelcomeScreen;
