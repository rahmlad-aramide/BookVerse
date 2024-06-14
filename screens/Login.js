import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Pressable,
  ImageBackground,
  Platform,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const pattern = require("../assets/pattern.png");
const arrowRight = require("../assets/arrow-right.png");

export default function Login({navigation}) {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFocused, setIsFocused] = useState({ email: false, password: false });

  const handleValidation = () => {
    let errors = {};
    if (!email) errors.email = "Email cannot be empty.";
    if (!password) errors.password = "Password cannot be empty.";
    if (password && password.length < 8)
      errors.password = "Password has to be a min of 8 characters.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if (handleValidation()) {
      setEmail("");
      setPassword("");
      navigation.navigate('Main')
    } else {
      console.log("Please enter a email and password");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <StatusBar style="light" />
      <ScrollView keyboardDismissMode="on-drag">
      <View style={styles.headerContainer}>
        <ImageBackground
          source={pattern}
          style={styles.headerBg}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            accessibilityLabel="Back Icon"
            style={styles.backButton}
          >
            <Image source={arrowRight} />
          </Pressable>
          <Text style={styles.headerText}>Login</Text>
          <Text style={styles.headerBody}>
            Welcome back, please enter your details.
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Enter your email address"
          style={[
            styles.input,
            isFocused.email ? styles.focusedInput : null,
            errors.email ? styles.errorInput : null,
          ]}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          onFocus={() => setIsFocused({ email: true, password: false })}
        />
      </View>
      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ) : null}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={[
            styles.input,
            isFocused.password ? styles.focusedInput : null,
            errors.password ? styles.errorInput : null,
          ]}
          secureTextEntry={show}
          value={password}
          onChangeText={setPassword}
          onFocus={() => setIsFocused({ email: false, password: true })}
        />
      </View>
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}
      <View style={styles.rememberContainer}>
        <Text style={[styles.rememberMe, styles.defaultFont]}></Text>
        <Text style={[styles.forgotPassword, styles.defaultFont]}>
          Forgot Password?
        </Text>
      </View>
      <View style={styles.loginContainer}>
        <Pressable style={styles.loginButton} onPress={handleSubmit}>
          <Text style={[styles.login, styles.defaultFont]}>Login</Text>
        </Pressable>
        <View style={styles.dhacContainer}>
          <Text style={[styles.dhac, styles.defaultFont]}>
            Don't have an account?{" "}
          </Text>
          <Pressable style={styles.dhacSignupButton} onPress={()=>navigation.navigate('Signup')}>
            <Text style={[styles.dhacSignup, styles.defaultFont]}>Signup</Text>
          </Pressable>
        </View>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Switzer-Regular",
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
    paddingTop: 36,
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
