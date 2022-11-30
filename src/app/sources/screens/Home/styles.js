import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        position: 'absolute',
        bottom: 12
    },
    btn_m: {
        width: 356,
        borderRadius: 6,
        height: 55,
        justifyContent: 'center'
    },
    btn_text: {
        alignSelf: 'center',
        fontFamily: 'Poppins',
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 30,
        textAlign: "center",
        letterSpacing: 0.4,
        color: "#FFFFFF"
    }
});

export default styles;