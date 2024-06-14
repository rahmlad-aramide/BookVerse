import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
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
import { styles } from "./Login";

const pattern = require("../assets/pattern.png");
const arrowRight = require("../assets/arrow-right.png");

export default function Signup({ navigation }) {
  const [show, setShow] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFocused, setIsFocused] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    password: false,
  });

  const handleValidation = () => {
    let errors = {};
    if (!fullName) errors.fullName = "Full name cannot be empty.";
    if (!email) errors.email = "Email cannot be empty.";
    if (!phoneNumber) errors.phoneNumber = "Phone number cannot be empty.";
    if (!password) errors.password = "Password cannot be empty.";
    if (password && password.length < 8)
      errors.password = "Password has to be a min of 8 characters.";
    if (phoneNumber && phoneNumber.length < 11)
      errors.password = "Password has to be a min of 11 digits.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if (handleValidation()) {
      setFullName("");
      setEmail("");
      setPhoneNumber("");
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
          <Text style={styles.headerText}>Sign up</Text>
          <Text style={styles.headerBody}>
            Welcome, please enter your details.
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter your full name"
          style={[
            styles.input,
            isFocused.fullName ? styles.focusedInput : null,
            errors.fullName ? styles.errorInput : null,
          ]}
          value={fullName}
          onChangeText={setFullName}
          onFocus={() =>
            setIsFocused({
              fullName: true,
              fullName: false,
              phoneNumber: false,
              password: false,
            })
          }
        />
      </View>
      {errors.fullName ? (
        <Text style={styles.errorText}>{errors.fullName}</Text>
      ) : null}
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
          onFocus={() =>
            setIsFocused({
              fullName: false,
              email: true,
              phoneNumber: false,
              password: false,
            })
          }
        />
      </View>
      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ) : null}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          placeholder="Enter your phone number"
          style={[
            styles.input,
            isFocused.email ? styles.focusedInput : null,
            errors.email ? styles.errorInput : null,
          ]}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="number-pad"
          onFocus={() =>
            setIsFocused({
              fullName: false,
              email: false,
              phoneNumber: true,
              password: false,
            })
          }
        />
      </View>
      {errors.phoneNumber ? (
        <Text style={styles.errorText}>{errors.phoneNumber}</Text>
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
          onFocus={() =>
            setIsFocused({
              fullName: false,
              email: false,
              phoneNumber: false,
              password: true,
            })
          }
        />
      </View>
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}
      <View style={styles.rememberContainer}>
        <Text style={[styles.rememberMe, styles.defaultFont]}>Remember me</Text>
        <Text style={[styles.forgotPassword, styles.defaultFont]}>
          Forgot Password?
        </Text>
      </View>
      <View style={styles.loginContainer}>
        <Pressable style={styles.loginButton} onPress={handleSubmit}>
          <Text style={[styles.login, styles.defaultFont]}>Sign Up</Text>
        </Pressable>
        <View style={styles.dhacContainer}>
          <Text style={[styles.dhac, styles.defaultFont]}>
            Already have an account?{" "}
          </Text>
          <Pressable
            style={styles.dhacSignupButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.dhacSignup, styles.defaultFont]}>Login</Text>
          </Pressable>
        </View>
      </View>
      </ScrollView>
      
    </KeyboardAvoidingView>
  );
}
