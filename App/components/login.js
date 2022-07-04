import React, { Component } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  Stylesheet,
} from "react-native";

class Input extends Component {
  state = {
    email: "",
    password: "",
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePassword = (text) => {
    this.setState({ Password: text });
  };
  login = (email, pass) => {
    alert("email: " + email + " pasword: " + pass);
  };
  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          style={Styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor={"#9a73ef"}
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        ></TextInput>
        <TextInput
          style={Styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor={"#9a73ef"}
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        ></TextInput>
        <TouchableOpacity
          style={Style.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          {/* <Text style={Style.loginText}>L</Text> */}
        </TouchableOpacity>
      </View>
    );
  }
}
export default Input;
