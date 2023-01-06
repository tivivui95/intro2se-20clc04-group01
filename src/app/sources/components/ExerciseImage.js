import React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";

const ExerciseImage = ({ image, name, onPress, style={ width: 100, height: 100}, textStyle={width: 100} }) => {
    return (<Pressable onPress={onPress}>
        <View style={[styles.border, style]}>
        {image ? <Image style={styles.img_cv} source={image} alt='ex' />: <Image style={styles.img} source={require('../../assets/images/logo.png')} />}
        </View>
        <Text style={[styles.text, textStyle]}>{name}</Text>
    </Pressable>);
}
const styles = StyleSheet.create({
    border: {
        borderRadius: 15,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    }, 
    img: {
        width: 40,
        height: 40
    },
    img_cv: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    text: {
        padding: 6,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '700',
        color: 'black'
    }
});
export default ExerciseImage;