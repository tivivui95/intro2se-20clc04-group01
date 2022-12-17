import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Attributes from "../../../constants/Attributes";

const styles = StyleSheet.create({
    bottom: {
        bottom: 56
    },
    sub_text: {
        fontFamily: Attributes.QuicksandMedium,
        color: Colors.defaultBlack,
        fontSize: Attributes.smallerFont,
        marginBottom: 15
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
    }
});

export default styles;