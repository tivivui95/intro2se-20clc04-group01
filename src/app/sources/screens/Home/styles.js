import { StyleSheet } from "react-native";

import Attributes from "../../../constants/Attributes";
import Colors from "../../../constants/Colors";

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
        fontFamily: Attributes.QuicksandSemiBold,
        color: '#000000',
        fontSize: Attributes.smallerFont,
        marginTop: 10,
        marginBottom: 12
    },
    overlay: {
        position: 'absolute',
        opacity: 0.2,
        backgroundColor: Colors.lightPink,
        width: '100%',
        height: '100%'
    }
});

export default styles;