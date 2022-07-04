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

function ReceiptScreen({ navigation }) {
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
      </ImageBackground>
      <Text style={Styles.title}>Current balance</Text>
      <Text style={Styles.balance}>$1,245</Text>
      <Text style={Styles.Text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>

      <Image
        style={Styles.pay}
        source={require("../assets/arrowup.png")}
      ></Image>
      <Text style={Styles.paytext}>pay</Text>
      <Image
        style={Styles.receive}
        source={require("../assets/arrowdown.png")}
      ></Image>
      <Text style={Styles.receivetext}>receive</Text>
      <Image
        style={Styles.bills}
        source={require("../assets/book.png")}
      ></Image>
      <Text style={Styles.billstext}>bills</Text>
      <Image
        style={Styles.transact}
        source={require("../assets/half arrow.jpg")}
      ></Image>
      <Text style={Styles.transacttext}>transact</Text>

      <Image style={Styles.loan} source={require("../assets/loan.png")}></Image>
      <Text style={Styles.loantext}>Loan</Text>
      <Image
        style={Styles.card}
        source={require("../assets/creditcard.jpg")}
      ></Image>
      <Text style={Styles.cardtext}>CreditCard</Text>
      <Image
        style={Styles.fund}
        source={require("../assets/mutual fund.jpg")}
      ></Image>
      <Text style={Styles.fundtext}>mutualFund</Text>
      <Image
        style={Styles.deposit}
        source={require("../assets/fixed deposit.png")}
      ></Image>
      <Text style={Styles.deposittext}>FixedDeposit</Text>

      <Text style={Styles.recent}>Recent Transaction</Text>
      <Image
        style={Styles.cash}
        source={require("../assets/cashWithdrawal.png")}
      ></Image>
      <Text style={Styles.cashtext}>Cash Withdrawal</Text>
      <Text style={Styles.cashprice}>$30.4</Text>

      <Image
        style={Styles.payment}
        source={require("../assets/payment.png")}
      ></Image>
      <Text style={Styles.paymenttext}>Payment</Text>
      <Text style={Styles.paymentprice}>$50.0</Text>

      <Image
        style={Styles.store}
        source={require("../assets/lock.png")}
      ></Image>
      <Text style={Styles.storetext}>Grocery store</Text>
      <Text style={Styles.storeprice}>$60.0</Text>

      <Pressable
        style={Styles.button}
        onPress={() => navigation.navigate("Balance")}
      >
        <Text style={Styles.login}>Balance</Text>
      </Pressable>
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
    color: "#ffffff",
    justifyContent: "flex-end",
    position: "absolute",
    marginTop: 200,
    marginLeft: 250,
    fontWeight: "bold",
  },
  Text: {
    fontSize: 25,
    color: "white",
    justifyContent: "flex-end",
    position: "absolute",
    marginTop: 240,
    marginLeft: 180,
  },
  pay: {
    marginTop: 350,
    position: "absolute",
    marginLeft: 0,
    width: 80,
    height: 100,
  },
  paytext: {
    marginTop: 450,
    marginLeft: 0,
    fontSize: 35,
    color: "blue",
    position: "absolute",
  },
  receive: {
    marginTop: 350,
    position: "absolute",
    marginLeft: 200,
    width: 80,
    height: 100,
  },
  receivetext: {
    marginTop: 450,
    marginLeft: 200,
    fontSize: 35,
    color: "blue",
    position: "absolute",
  },
  bills: {
    marginTop: 350,
    position: "absolute",
    marginLeft: 400,
    width: 80,
    height: 100,
  },
  billstext: {
    marginTop: 450,
    marginLeft: 400,
    fontSize: 35,
    color: "blue",
    position: "absolute",
  },
  transact: {
    marginTop: 350,
    position: "absolute",
    marginLeft: 600,
    width: 80,
    height: 100,
  },
  transacttext: {
    marginTop: 450,
    marginLeft: 580,
    fontSize: 35,
    color: "blue",
    position: "absolute",
  },

  loan: {
    marginTop: 550,
    position: "absolute",
    marginLeft: 0,
    width: 80,
    height: 100,
  },
  loantext: {
    marginTop: 650,
    marginLeft: 0,
    fontSize: 35,
    color: "blue",
    position: "absolute",
  },

  card: {
    marginTop: 550,
    position: "absolute",
    marginLeft: 200,
    width: 80,
    height: 100,
  },
  cardtext: {
    marginTop: 650,
    marginLeft: 150,
    fontSize: 35,
    color: "blue",
    position: "absolute",
  },

  fund: {
    marginTop: 550,
    position: "absolute",
    marginLeft: 400,
    width: 80,
    height: 100,
  },
  fundtext: {
    marginTop: 650,
    marginLeft: 350,
    fontSize: 35,
    color: "blue",
    position: "absolute",
  },
  deposit: {
    marginTop: 550,
    position: "absolute",
    marginLeft: 600,
    width: 80,
    height: 100,
  },
  deposittext: {
    marginTop: 650,
    marginLeft: 550,
    fontSize: 35,
    color: "blue",
    position: "absolute",
  },

  recent: {
    marginTop: 750,
    marginLeft: 0,
    fontSize: 45,
    fontWeight: "bold",
    color: "blue",
    position: "absolute",
  },
  cash: {
    marginTop: 850,
    marginLeft: 0,
    fontSize: 45,
    width: 80,
    height: 100,
    position: "absolute",
  },
  cashtext: {
    marginTop: 850,
    marginLeft: 200,
    fontSize: 35,
    position: "absolute",
    color: "blue",
  },
  cashprice: {
    marginTop: 850,
    marginLeft: 600,
    fontSize: 35,
    position: "absolute",
    color: "blue",
    fontWeight: "bold",
  },

  payment: {
    marginTop: 950,
    marginLeft: 0,
    fontSize: 45,
    width: 80,
    height: 100,
    position: "absolute",
  },
  paymenttext: {
    marginTop: 950,
    marginLeft: 200,
    fontSize: 35,
    position: "absolute",
    color: "blue",
  },
  paymentprice: {
    marginTop: 950,
    marginLeft: 600,
    fontSize: 35,
    position: "absolute",
    color: "blue",
    fontWeight: "bold",
  },

  store: {
    marginTop: 1050,
    marginLeft: 0,
    fontSize: 45,
    width: 80,
    height: 100,
    position: "absolute",
  },
  storetext: {
    marginTop: 1050,
    marginLeft: 200,
    fontSize: 35,
    position: "absolute",
    color: "blue",
  },
  storeprice: {
    marginTop: 1050,
    marginLeft: 600,
    fontSize: 35,
    position: "absolute",
    color: "blue",
    fontWeight: "bold",
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
export default ReceiptScreen;
