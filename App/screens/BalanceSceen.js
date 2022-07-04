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

function BalanceScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.background}
        source={require("../assets/halfcircle.png")}
      >
        <Image
          style={Styles.logo}
          source={require("../assets/user.jpg")}
        ></Image>
        <Text style={Styles.name}>Victory Olamide</Text>

        <Image
          style={Styles.menu}
          source={require("../assets/dot.png")}
        ></Image>
        <Text style={Styles.title}>COMPLETE</Text>
      </ImageBackground>

      <Image
        style={Styles.pay}
        source={require("../assets/payment.png")}
      ></Image>

      <Text style={Styles.balance}>$45</Text>
      <Text style={Styles.Text}>Paid to:</Text>
      <Image style={Styles.cusname} source={require("../assets/A.png")}></Image>
      <Text style={Styles.username}>Albert</Text>
      <Text style={Styles.tranact}>Transaction Id</Text>
      <Text style={Styles.id}>1234567890</Text>

      <Pressable
        style={Styles.button}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={Styles.login}>Done</Text>
      </Pressable>
      <Text style={Styles.share}>Share Receipt</Text>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    position: "absolute",
    marginLeft: 600,
    marginTop: 10,
  },
  name: {
    marginLeft: 485,
    marginTop: 30,
    color: "blue",
    fontSize: 35,
    position: "absolute",
  },
  menu: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    position: "absolute",
    marginLeft: 0,
    marginTop: 10,
  },

  background: {
    flex: 1,
    width: 720,
    height: 300,
    marginTop: 10,
    // justifyContent: 'flex-end',
  },
  pay: {
    flex: 1,
    marginTop: 350,
    marginLeft: 300,
    width: 150,
    height: 180,
    position: "absolute",
    justifyContent: "flex-end",
  },
  cusname: {
    marginTop: 650,
    marginLeft: 100,
    width: 80,
    height: 100,
    position: "absolute",
  },
  username: {
    marginTop: 650,
    marginLeft: 300,
    fontWeight: "bold",
    color: "blue",
    position: "absolute",
    fontSize: 45,
  },
  tranact: {
    marginLeft: 220,
    marginTop: 750,
    color: "blue",
    fontWeight: "bold",
    position: "absolute",
    fontSize: 45,
  },
  id: {
    marginLeft: 220,
    marginTop: 800,
    color: "black",
    // fontWeight: "bold",
    position: "absolute",
    fontSize: 45,
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
    color: "#ffffff",
    fontWeight: "bold",
    justifyContent: "flex-end",
    fontSize: 55,
    marginTop: 130,
    marginLeft: 180,
    textAlign: "center",
  },
  balance: {
    fontSize: 35,
    color: "blue",
    justifyContent: "flex-end",
    position: "absolute",
    marginTop: 550,
    marginLeft: 350,
    fontWeight: "bold",
  },
  Text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "blue",
    justifyContent: "flex-end",
    position: "absolute",
    marginTop: 600,
    marginLeft: 300,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 900,
    marginLeft: 150,
    width: 500,
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
  share: {
    fontSize: 35,
    fontWeight: "bold",
    color: "blue",
    position: "absolute",
    marginTop: 1050,
    marginLeft: 250,
  },
});
export default BalanceScreen;
