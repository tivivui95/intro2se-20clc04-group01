import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Attributes from "../../../constants/Attributes";

const styles = StyleSheet.create({
    bottom: {
        bottom: 56
    },
    overlay: {
        position: 'absolute',
        opacity: 0.82,
        backgroundColor: Colors.lightPink,
        width: '100%',
        height: '100%'
    },
    text_input: {
        borderColor: Colors.defaultBlack,
        borderWidth: 1,
        width: 356,
        borderRadius: 6,
        height: 55,
        marginVertical: 15,
        paddingHorizontal: 15,
        fontSize: Attributes.smallerFont,
        fontFamily: Attributes.QuicksandMedium,
        backgroundColor: Colors.defaultWhite
    },
    nameSe: {
        fontFamily: Attributes.PoppinsSemiBold,
        fontSize: Attributes.regularFont,
        color: Colors.softBlue,
        marginTop: 5,
        marginLeft: 10
    },
    nameEx: {
        fontFamily: Attributes.PoppinsSemiBold,
        fontSize: Attributes.regularFont,
        color: Colors.vivaMagenta,
        marginLeft: 10
    },
    title: {
        fontFamily: Attributes.PoppinsSemiBold,
        fontSize: Attributes.smallFont,
        color: Colors.defaultBlack,
        marginLeft: 5,
        marginTop: 10
    },
    wrapper: {
        marginLeft: 10,
        width: 390,
        height: 200,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
      video_wrapper: {
        alignSelf: 'center',
        width: 356,
        height: 200,
        borderRadius: 10
      },
});

export default styles;