import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Attributes from "../../../constants/Attributes";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        position: 'absolute',
        bottom: 55,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    btn_s: {
        position: 'absolute',
        bottom: 50
    },
    sub_text: {
        fontFamily: Attributes.QuicksandMedium,
        color: 'black',
        fontSize: 15,
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
        borderColor: 'black',
        borderWidth: 1,
        width: 356,
        borderRadius: 6,
        height: 55,
        marginVertical: 15,
        paddingHorizontal: 15,
        fontFamily: Attributes.QuicksandMedium,
        backgroundColor: 'white'
    }
});

export default styles;