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
        position: 'relative'
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
        bottom: 55,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    btn_s: {
        position: 'absolute',
        bottom: 50
    },
    overlay: {
        position: 'absolute',
        opacity: 0.82,
        backgroundColor: '#F3EED9',
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
        fontFamily: 'Quicksand',
        backgroundColor: 'white'
    },
    logo: {
        marginBottom: 20
    }
});

export default styles;