import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONT } from "../../constants/theme";
import icons from "../../constants/icons";
import { BookCard } from "../../components/BookCard";
import images from "../../constants/images";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={homeStyle.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View style={homeStyle.headingContainer}>
        <Text style={homeStyle.headingText}>Hi, Abdrahman</Text>
        <View style={homeStyle.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("List")}>
            <Image source={icons.heart} style={homeStyle.iconStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Image source={icons.bell} style={homeStyle.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={homeStyle.contentContainer}>
        <View style={homeStyle.ebookContainer}>
          <Pressable style={homeStyle.ebookButton}>
            <Text style={homeStyle.ebookText}>E-books</Text>
          </Pressable>
        </View>
        <View style={homeStyle.suggestedContainer}>
          <View style={homeStyle.suggestedHeading}>
            <Text style={homeStyle.suggestedText}>Suggested for you</Text>
            <TouchableOpacity style={homeStyle.suggestedButton}>
              <Text style={homeStyle.suggestedButton}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyle.booksContainer}>
            <BookCard />
            <BookCard
              image={images.book2}
              title="A Guide to Teach Good Beh..."
            />
          </View>
        </View>
        <View style={homeStyle.newReleasesContainer}>
          <View style={homeStyle.suggestedHeading}>
            <Text style={homeStyle.suggestedText}>New Releases</Text>
            <TouchableOpacity style={homeStyle.suggestedButton}>
              <Text style={homeStyle.suggestedButton}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyle.booksContainer}>
            <BookCard />
            <BookCard
              image={images.book2}
              title="Rich Dad Poor Dad"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
    fontFamily: "Switzer-Regular",
    paddingHorizontal: 20,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingText: {
    fontFamily: "Switzer-Semibold",
    fontSize: 14,
    color: COLORS.dark,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  iconStyle: {
    resizeMode: "center",
    width: 24,
  },
  ebookContainer: {
    backgroundColor: "#F2F2F2",
    padding: 4,
    borderRadius: 16,
    height: 48,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ebookButton: {
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  ebookText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONT.sMedium,
  },
  contentContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    marginTop: 28,
  },
  suggestedContainer: {
    display: "flex",
    alignItems: "center",
  },
  newReleasesContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  suggestedHeading: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
    // alignItems: "center",
  },
  suggestedText: {
    fontFamily: "Switzer-Medium",
    fontSize: 20,
    color: COLORS.darkerPrimary,
  },
  suggestedButton: {
    fontFamily: "Switzer-Medium",
    fontSize: 16,
    color: COLORS.primary,
    textDecorationColor: COLORS.primary,
    textDecorationLine: "underline",
  },
  booksContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    flex: 1,
    columnGap: 10,
  },
});
