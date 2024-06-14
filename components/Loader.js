import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

const loaderImage = require("../assets/logo.png");

export const PulsingLoader = () => {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 750,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Animated.Image
        source={loaderImage}
        style={[
          styles.loader,
          {
            transform: [
              {
                scale: pulseAnim,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001F3D",
  },
  loader: {
    width: 153,
    height: 55,
  },
});
