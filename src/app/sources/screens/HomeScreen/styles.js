import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Attributes from "../../../constants/Attributes";

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.lightPink
    },
    sayHello: {
        fontSize: Attributes.smallFont,
        fontFamily: Attributes.Poppins,
    },
    name: {
        color: Colors.vivaMagenta,
        fontFamily: Attributes.PoppinsSemiBold
    },
    title: {
        color: Colors.vivaMagenta,
        fontSize: Attributes.largeFont,
        fontFamily: Attributes.PoppinsSemiBold,
        lineHeight: Attributes.largeFont
    },
    ex_today: {
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        height: 170,
    },
    ava_picture:
    {
        resizeMode: 'contain',
    },
    plan_picture:
    {
        position: 'relative',
        borderRadius: 10,
        marginHorizontal: 25
    },
    text_input: {
        borderRadius: 6,
        height: 44,
        marginVertical: 16,
        paddingHorizontal: 15,
        fontFamily: Attributes.QuicksandMedium,
        backgroundColor: Colors.defaultWhite
    },
    loadingcontain: {
        flex: 1,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;