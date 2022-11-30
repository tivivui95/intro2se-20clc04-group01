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
        bottom: 152
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
    },
    circle: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 227,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    btn_s: {
        position: 'absolute',
        bottom: 50
    },
    sub_text: {
        fontFamily: 'Quicksand',
        color: '#9DA9DF',
        fontSize: 15,
        bottom: 14
    },
    overlay: {
        position: 'absolute',
        opacity: 0.1,
        backgroundColor: '#F3EED9',
        width: '100%',
        height: '100%'
    }
});

export default styles;