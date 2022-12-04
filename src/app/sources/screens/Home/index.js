import React from "react";
import { ImageBackground, View, Text, Image, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from "./styles";

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg-2.png')} resizeMode="cover" style={styles.bg}>
                {/* <Image source={require('../../../assets/images/logo-w.png')}  alt='logo' /> */}
                <View style={styles.overlay}></View>
                <ImageBackground source={require('../../../assets/images/intro_img.png')} resizeMode="cover" style={styles.circle}>   
                    <Pressable style={styles.btn} onPress={() => navigation.navigate("Login")}>
                        <LinearGradient start={{x: 0.5, y: 0.5}} end={{x: 0.93, y: 0.5}} colors={['#BB2649', '#BB2649']} style={styles.btn_m}>
                            <Text style={styles.btn_text}>SIGN IN</Text>
                        </LinearGradient>
                    </Pressable>

                    <Text style={styles.sub_text}>If you are new to use</Text>

                    <Pressable style={styles.btn_s} onPress={() => navigation.navigate("Signup")}>
                        <LinearGradient start={{x: 0.5, y: 0.5}} end={{x: 0.93, y: 0.5}} colors={['#9DA9DF', '#9DA9DF']} style={styles.btn_m}>
                            <Text style={styles.btn_text}>SIGN UP</Text>
                        </LinearGradient>
                    </Pressable>
                </ImageBackground>
            </ImageBackground>
        </View>
    )
}

export default Home;