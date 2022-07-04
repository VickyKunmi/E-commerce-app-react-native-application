// import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./App/screens/WelcomeScreen";
import LoginScreen from "./App/screens/LoginScreen";
import RegisterScreen from "./App/screens/RegisterScreen"; 
import ReceiptScreen from "./App/screens/ReceiptScreen";
import BalanceScreen from "./App/screens/BalanceSceen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Receipt" component={ReceiptScreen}/>
        <Stack.Screen name="Balance" component={BalanceScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
