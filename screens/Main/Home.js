import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/theme";
import icons from "../../constants/icons";

export default function Home ({navigation}) {
    return (
        <SafeAreaView style={homeStyle.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
            <View style={homeStyle.headingContainer}>
                <Text style={homeStyle.headingText}>
                    Hi, User
                </Text>
                <View style={homeStyle.iconsContainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('List')}>
                        <Image source={icons.heart} style={homeStyle.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
                        <Image source={icons.bell} style={homeStyle.iconStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: StatusBar.currentHeight + 16,
        fontFamily: "Switzer-Regular",
        paddingHorizontal: 20,
    },
    headingContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headingText: {
        fontFamily: "Switzer-Semibold",
        fontSize: 14,
        color: COLORS.dark
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
    }
})