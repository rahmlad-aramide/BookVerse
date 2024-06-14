import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text } from "react-native";
import { PulsingLoader } from "./components/Loader";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {createButtomTabNavigator} from '@react-navigation/bottom-tabs'
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding3 from "./screens/Onboarding3";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Main/Home";
import Main from "./screens/Main";
import List from "./screens/List";
import Notifications from "./screens/Notifications";
// import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();
// const Tab = createButtomTabNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    "Switzer-Regular": require("./assets/fonts/Switzer-Regular.otf"),
    "Switzer-Medium": require("./assets/fonts/Switzer-Medium.otf"),
    "Switzer-Semibold": require("./assets/fonts/Switzer-Semibold.otf"),
    "Switzer-Bold": require("./assets/fonts/Switzer-Bold.otf"),
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (!fontLoaded || loading) {
    return <PulsingLoader />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding1" component={Onboarding1}></Stack.Screen>
        <Stack.Screen name="Onboarding2" component={Onboarding2}></Stack.Screen>
        <Stack.Screen name="Onboarding3" component={Onboarding3}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        <Stack.Screen name="Main" component={Main}></Stack.Screen>
        <Stack.Screen name="List" component={List} screenOptions={{headerShown: true}}></Stack.Screen>
        <Stack.Screen name="Notifications" component={Notifications}  screenOptions={{headerShown: true}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fontFamily: "Switzer-Regular",
  defaultFont: {
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    minHeight: 152,
    backgroundColor: "#001F3D",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 24,
  },
  headerBg: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    height: 152,
  },
  imageStyle: {
    alignSelf: "flex-end",
  },
  backButton: {
    height: 24,
    marginBottom: 16,
  },
  header: {
    height: 36,
    backgroundColor: "red",
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Switzer-Medium",
    color: "#fff",
    marginBottom: 8,
  },
  headerBody: {
    fontSize: 16,
    fontFamily: "Switzer-Regular",
    color: "#f4f6f8",
  },
  inputContainer: {
    marginVertical: 8,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: "Switzer-Regular",
    color: "#2A2D31",
  },
  input: {
    borderColor: "#D8D8D8",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  focusedInput: {
    borderColor: "#003366",
  },
  errorInput: {
    borderColor: "#A30000",
  },
  rememberContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 40,
    marginTop: 8,
  },
  rememberMe: {
    color: "#2A2D31",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Switzer-Regular",
  },
  forgotPassword: {
    color: "#003366",
    fontSize: 14,
    fontFamily: "Switzer-Medium",
    textDecorationColor: "#003366",
    textDecorationLine: "underline",
  },
  loginContainer: {
    paddingHorizontal: 20,
  },
  loginButton: {
    backgroundColor: "#003366",
    marginBottom: 8,
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  login: {
    color: "white",
    textAlign: "center",
  },
  dhacContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  dhac: {
    color: "#575758",
    fontWeight: "400",
    fontSize: 14,
  },
  dhacSignupButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  dhacSignup: {
    color: "#003366",
    fontSize: 14,
    fontWeight: "500",
  },
  errorText: {
    color: "#A30000",
    fontSize: 14,
    paddingHorizontal: 20,
    fontFamily: "Switzer-Regular",
  },
});
