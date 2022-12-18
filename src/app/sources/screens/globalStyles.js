import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Attributes from "../../constants/Attributes";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    center_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom_flex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    two_col: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    blackTitle: {
        fontFamily: Attributes.PoppinsSemiBold,
        fontSize: Attributes.largeFont,
        color: Colors.defaultBlack
    },
    blackTitleSmall: {
        fontFamily: Attributes.PoppinsSemiBold,
        fontSize: Attributes.regularFont,
        color: Colors.defaultBlack
    },
    roundPadding: {
        padding: 32
    }
});

export default globalStyles;