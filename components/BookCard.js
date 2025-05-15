// import "com.reactnativecommunity.blurview.BlurViewPackage"
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../constants/images";
import icons from "../constants/icons";
import { COLORS, FONT } from "../constants/theme";
    // import { BlurView } from "@react-native-community/blur";
    // import { BlurView } from "@react-native-community/blur";
export function BookCard ({image=images.book1, title="Negotiate to win", author="Patrick J. Collins"}) {
    return (
        <View style={cardStyle.cardContainer}>
            <ImageBackground source={image} style={cardStyle.background}>
                <TouchableOpacity onPress={() => {}} style={cardStyle.iconContainer}>
                    <Image source={icons.heart} style={cardStyle.iconStyle} />
                </TouchableOpacity>
                <View intensity={200} style={cardStyle.textContainer}>
                    <View style={cardStyle.titleContainer}>
                        <Text style={cardStyle.title}>
                            {title}
                        </Text>
                        <Text style={cardStyle.rating}>
                            <Image source={icons.star} style={cardStyle.ratinIcon}></Image>
                            5.0
                        </Text>
                    </View>
                    <View>
                        <Text style={cardStyle.author}>
                            {author}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
const cardStyle = StyleSheet.create({
    cardContainer: {
        height: 200,
        display: 'flex',
        flex: 1,
        width: "100%",
    },
    background: {
        flex: 1,
        columnGap: 10,
        resizeMode: 'cover',
        borderRadius: 32,
    },
    textContainer: {
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#FFFFFF',
        elevation: 2,
        padding: 8,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        // width: '100%',
        flex: 1,
    },
    title: {
        numberOfLines: 1,
        fontFamily: FONT.sRegular,
        fontSize: 10,
        color: '#2A2D31'
    },
    author: {
        fontFamily: FONT.sRegular,
        fontSize: 8,
        color: '#575758'
    },
    iconContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 24,
        top: 10,
        right: 10,
        display: 'flex',
        // position: 'absolute',
        marginLeft: 'auto',
        padding: 6,
    },
    iconStyle: {
        resizeMode: "contain",
        height: 24,
        width: 24,
      },
      rating: {
        fontFamily: FONT.sRegular,
        fontSize: 8,
        color: '#FF7F0A'
      },
      ratinIcon: {
        height: 8,
        resizeMode: 'contain'
      }
})