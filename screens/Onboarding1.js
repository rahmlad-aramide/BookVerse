import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, Pressable, SafeAreaView, TouchableOpacity } from "react-native";
import images from "../constants/images";

export default function Onboarding1({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.skipContainer}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <Image source={images.onboarding1} style={styles.image} />
        <View style={styles.overlay} />
      </View>
      <View style={styles.textsContainer}>
        <View style={styles.indicators}>
          <TouchableOpacity disabled onPress={() => navigation.navigate("Onboarding1")}>
            <View style={[styles.indicator, styles.activeIndicator]}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding2")}>
            <View style={[styles.indicator, styles.inactiveIndicator]}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding3")}>
            <View style={[styles.indicator, styles.inactiveIndicator]}></View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Find your perfect read</Text>
        <Text style={styles.subtitle}>
          With thousands of books at your fingertips, finding your next literary
          obsession is a breeze.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Onboarding2")}
      >
        <Text style={styles.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 4 / 5,
    marginBottom: 16,
    position: "relative",
  },
  image: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    height: "100%",
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
    backgroundColor: "black",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  skip: {
    color: "white",
  },
  skipContainer: {
    position: "absolute",
    right: 22,
    top: 20,
    zIndex: 10,
    fontSize: 16,
    marginTop: 36,
    fontFamily: "Switzer-Regular",
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginBottom: 32,
  },
  indicator: {
    width: 29,
    height: 6,
    borderRadius: 6,
  },
  activeIndicator: {
    backgroundColor: "#001F3D",
  },
  inactiveIndicator: {
    backgroundColor: "#F4F6F8",
  },
  textsContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Switzer-Medium",
    fontSize: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Switzer-Regular",
    fontSize: 16,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: "#003366",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 9,
    marginTop: "auto",
    marginBottom: 40,
  },
  buttonLabel: {
    color: "white",
    textAlign: "center",
    fontFamily: "Switzer-Medium",
    fontSize: 16,
  },
});
