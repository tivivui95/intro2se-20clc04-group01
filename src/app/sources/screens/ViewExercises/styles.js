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
    }
});

export default styles;