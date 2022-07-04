import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";

function RegisterScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Image style={Styles.logo} source={require("../assets/logo.png")}></Image>

      {/* <ImageBackground
        style={Styles.background}
        source={require("../assets/background2.png")}
      ></ImageBackground> */}

      <Text style={Styles.title}>WELCOME BACK!</Text>
      <TextInput style={Styles.input} placeholder="Email"></TextInput>

      <TextInput
        style={Styles.password}
        placeholder="Password"
        returnKeyType="go"
        secureTextEntry
        autoCorrect={false}
      ></TextInput>
      <TextInput
        style={Styles.conpassword}
        placeholder="Confirm Password"
        returnKeyType="go"
        secureTextEntry
        autoCorrect={false}
      ></TextInput>

      <Text style={Styles.Text}>Have an account? Sign In now!</Text>
      <Pressable
        style={Styles.buttonUp}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={Styles.login}>SIGN In</Text>
      </Pressable>

      <Pressable
        style={Styles.button}
        onPress={() => navigation.navigate("Receipt")}
      >
        <Text style={Styles.login}>SIGN Up</Text>
      </Pressable>

      <Pressable>
        <Image
          style={Styles.socialface}
          source={require("../assets/socialmedia.jpg")}
        ></Image>
      </Pressable>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#40E0D0",
    flex: 1,
    justifyContent: "flex-start",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    position: "absolute",
    marginLeft: 300,
    marginTop: 50,
  },

  //   background: {
  //     flex: 1,
  //     // justifyContent: 'flex-end',
  //   },

  title: {
    position: "absolute",
    color: "#808000",
    fontWeight: "bold",
    justifyContent: "flex-end",
    fontSize: 55,
    marginTop: 150,
    marginLeft: 150,
    textAlign: "center",
  },
  input: {
    margin: 15,
    width: 450,
    height: 60,
    fontSize: 35,
    borderColor: "#7a42f4",
    borderWidth: 1,
    position: "absolute",
    marginTop: 250,
    marginLeft: 150,
    placeholderTextColor: "black",
  },
  password: {
    margin: 15,
    width: 450,
    height: 60,
    fontSize: 35,
    borderColor: "#7a42f4",
    borderWidth: 1,
    position: "absolute",
    marginTop: 350,
    marginLeft: 150,
    placeholderTextColor: "black",
  },
  conpassword: {
    margin: 15,
    width: 450,
    height: 60,
    fontSize: 35,
    borderColor: "#7a42f4",
    borderWidth: 1,
    position: "absolute",
    marginTop: 450,
    marginLeft: 150,
    placeholderTextColor: "black",
  },
  Text: {
    fontSize: 25,
    textDecorationColor: "#000000",
    justifyContent: "flex-end",
    position: "absolute",
    marginTop: 600,
    marginLeft: 150,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 650,
    marginLeft: 200,
    width: 300,
    height: 100,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 4,
    backgroundColor: "#00ffff",
  },
  buttonUp: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 800,
    marginLeft: 200,
    width: 300,
    height: 80,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 4,
    backgroundColor: "yellow",
  },
  login: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#ffffff",
  },

  socialface: {
    width: 500,
    height: 500,
    resizeMode: "contain",
    position: "absolute",
    marginLeft: 120,
    marginTop: 800,
  },
});
export default RegisterScreen;
