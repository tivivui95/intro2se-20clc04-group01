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
    ChangePasswordFrame: {
        marginTop: 300,
        marginLeft: 27,
        marginRight: 27
    },
    Btn_Pos:{
        marginTop: 150
    }

});

export default styles;