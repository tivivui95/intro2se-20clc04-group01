import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ExerciseImage = ({ image, name }) => {
    return (<View>
        <View style={styles.border}>
        {image ? <Image style={styles.img} source={image} alt='ex' />: <Image style={styles.img} source={require('../../assets/images/logo.png')} />}
        </View>
        <Text style={styles.text}>{name}</Text>
    </View>);
}
const styles = StyleSheet.create({
    border: {
        borderRadius: 15,
        backgroundColor: 'white',
        width: 100,
        height: 100,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    }, 
    img: {
        width: 40,
        height: 40
    },
    text: {
        padding: 6,
        alignSelf: 'center',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '700',
        color: 'black'
    }
});
export default ExerciseImage;