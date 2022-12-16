import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8E9ED',
        alignContent: 'center',
    },
    main: {
        flex: 1,
        marginHorizontal: 24
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    back: {
        position: 'relative',
        margin: 9,
        zIndex: 1
    },
    top_text: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: '#2694BB',
        fontWeight: '400'
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: 24,
        color: '#BB2649',
        fontWeight: 'bold'
    },
    text: {
        fontFamily: 'Poppins',
        fontSize: 14,
        color: 'black'
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
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 30,
        textAlign: "center",
        letterSpacing: 0.4,
        color: "#FFFFFF"
    },
    title2: {
        fontFamily: 'Poppins',
        color: '#2694BB',
        marginTop: 12,
        fontWeight: '800',
        fontSize: 16
    }
});

export default styles;