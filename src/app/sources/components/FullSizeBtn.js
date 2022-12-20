import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Attributes from "../../constants/Attributes";

export default FullSizeButton = ({ bgColor, txtColor, onPress, text }) => {
    return (
        <Pressable style={styles.btn} onPress={onPress}>
            <LinearGradient start={{x: 0.5, y: 0.5}} end={{x: 0.93, y: 0.5}} colors={[bgColor, bgColor]} style={styles.btn_m}>
                <Text style={styles.btn_text}><Text style={{ color: txtColor }}>{text}</Text></Text>
            </LinearGradient>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn: {
        position: 'relative',
        alignSelf: 'center'
    },
    btn_m: {
        width: 356,
        borderRadius: 6,
        height: 55,
        justifyContent: 'center', 
        elevation: 5
    },
    btn_text: {
        alignSelf: 'center',
        fontFamily: Attributes.PoppinsBold,
        fontStyle: "normal",
        fontSize: Attributes.regularFont,
        lineHeight: 30,
        textAlign: "center",
        letterSpacing: 0.4
    }
})