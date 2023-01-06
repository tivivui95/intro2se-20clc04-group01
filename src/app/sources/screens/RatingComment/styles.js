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
        height: '200%'
    },

    top_text: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: '#2694BB',
        fontWeight: '400',
        fontWeight: 'bold'
    },

    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    ContainFrame: {
        marginTop: 20,
        margin: 14,
        flex: 1,
    },

    Btn_Pos:{
        marginTop: 30
    },

    Next_Pos: {
        marginBottom: 30,
        marginTop: 555
    },

});

export default styles;