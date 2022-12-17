import React from "react";
import { View, Text } from "react-native";
import { ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import Attributes from "../../constants/Attributes";
import Colors from "../../constants/Colors";
import globalStyles from "../screens/globalStyles";

export default ExPanel = ({ onPress, title, image, style, width }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: width }}>
            <ImageBackground 
              source={image ? image: require('../../assets/images/logo-p.png')}
              resizeMode='cover'
              style={style}
            >
                <View style={styles.overlay}></View> 
                <Text style={styles.text}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Attributes.PoppinsSemiBold,
        fontSize: Attributes.regularFont,
        color: Colors.defaultWhite
    },
    overlay: {
        position: 'absolute',
        opacity: 0.5,
        backgroundColor: Colors.defaultBlack,
        width: '100%',
        height: '100%'
    }
})