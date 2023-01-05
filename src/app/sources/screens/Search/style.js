import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Attributes from "../../../constants/Attributes";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightPink
    },
    text_input: {
        borderRadius: 6,
        height: 48,
        marginVertical: 8,
        paddingHorizontal: 16,
        fontFamily: Attributes.QuicksandMedium,
        backgroundColor: Colors.defaultWhite,
        color: Colors.defaultBlack
    },
    search_btn:{
        marginVertical: 24,
    },
    row:{
        marginVertical: 8,
    },
    ex_today: {
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        height: 170,
        marginVertical: 8
    },
    loadingcontain: {
        flex: 1,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        position: 'relative',
        zIndex: 3
    },
});

export default styles;