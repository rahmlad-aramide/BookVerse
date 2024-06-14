import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, Pressable, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./Onboarding1";
import images from "../constants/images";

const image = require("../assets/home2.jpg");
export default function Onboarding2({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.skipContainer}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <Image source={images.onboarding2} style={styles.image} />
        <View style={styles.overlay} />
      </View>
      <View style={styles.textsContainer}>
        <View style={styles.indicators}>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding1")}>
            <View style={[styles.indicator, styles.inactiveIndicator]}></View>
          </TouchableOpacity>
          <TouchableOpacity disabled onPress={() => navigation.navigate("Onboarding2")}>
            <View style={[styles.indicator, styles.activeIndicator]}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding3")}>
            <View style={[styles.indicator, styles.inactiveIndicator]}></View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Keep your books organised</Text>
        <Text style={styles.subtitle}>
          With BookVerse application, you can organised your books.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Onboarding3")}
      >
        <Text style={styles.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
