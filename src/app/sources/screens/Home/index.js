import React from "react";
import { ImageBackground, View, Text, Image, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from "./styles";

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg-1.png')} resizeMode="cover" style={styles.bg}>
                <Image source={require('../../../assets/images/logo-w.png')}  alt='logo' />
                <Pressable style={styles.btn}>
                    <LinearGradient start={{x: 0.5, y: 0.5}} end={{x: 0.93, y: 0.5}} colors={['#EB0327', '#EB0349']} style={styles.btn_m}>
                        <Text style={styles.btn_text}>SIGN IN</Text>
                    </LinearGradient>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default Home;