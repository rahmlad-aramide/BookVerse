import { Image, SafeAreaView, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Main/Home";
import Library from "./Main/Library";
import Search from "./Main/Search";
import User from "./Main/User";
import { COLORS, FONT } from "../constants/theme";
import icons from "../constants/icons";

const Tab = createBottomTabNavigator();
export default function Main({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabelStyle: mainStyles.tabBarLabel,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarIcon: ({ focused }) => (
              <Image
                style={mainStyles.image}
                source={focused ? icons.ActiveHome : icons.InactiveHome}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            headerShown: false,
            tabBarLabelStyle: mainStyles.tabBarLabel,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarIcon: ({ focused }) => (
              <Image
                style={mainStyles.image}
                source={focused ? icons.ActiveLibrary : icons.InactiveLibrary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
            tabBarLabelStyle: mainStyles.tabBarLabel,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarIcon: ({ focused }) => (
              <Image
                style={mainStyles.image}
                source={focused ? icons.ActiveSearch : icons.InactiveSearch}
              />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            headerShown: false,
            tabBarLabelStyle: mainStyles.tabBarLabel,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarIcon: ({ focused }) => (
              <Image
                style={mainStyles.image}
                source={focused ? icons.ActiveUser : icons.InactiveUser}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const mainStyles = StyleSheet.create({
  image: {
    resizeMode: "center",
  },
  tabBarLabel: {
    fontSize: 16,
    fontFamily: FONT.sRegular,
  },
});
