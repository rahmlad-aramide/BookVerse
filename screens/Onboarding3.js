import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Pressable, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./Onboarding1";
import images from "../constants/images";

export default function Onboarding3({ navigation }) {
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
        <Image source={images.onboarding3} style={styles.image} />
        <View style={styles.overlay} />
      </View>
      <View style={styles.textsContainer}>
        <View style={styles.indicators}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Onboarding1")}
          >
            <View style={[styles.indicator, styles.inactiveIndicator]}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding2")}>
            <View style={[styles.indicator, styles.inactiveIndicator]}></View>
          </TouchableOpacity>
          <TouchableOpacity disabled onPress={() => navigation.navigate("Onboarding3")}>
            <View style={[styles.indicator, styles.activeIndicator]}></View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Read offline</Text>
        <Text style={styles.subtitle}>
          Read your favourites books offline at your own comfort time.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonLabel}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
