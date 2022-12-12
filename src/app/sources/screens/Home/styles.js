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
        position: 'relative',
        fontFamily: 'Quicksand',
        color: '#000000',
        fontSize: 15,
        fontWeight: "bold",
        margin: 10
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