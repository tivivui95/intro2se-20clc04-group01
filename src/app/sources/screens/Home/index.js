import React from "react";
import { ImageBackground, View, Text, Image, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import FullSizeBtn from "../../components/FullSizeBtn";
import Colors from '../../../constants/Colors';

import styles from "./styles";

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg-2.png')} resizeMode="cover" style={styles.bg}>
                <Image source={require('../../../assets/images/logo-w.png')}  alt='logo' />
                <View style={styles.overlay}></View>
                <ImageBackground source={require('../../../assets/images/intro_img.png')} resizeMode="cover" style={styles.circle}>   
                    <FullSizeBtn 
                        bgColor={Colors.vivaMagenta} 
                        txtColor={Colors.defaultWhite} 
                        text='SIGN IN' 
                        onPress={() => navigation.navigate("Login")} 
                    />
                    <Text style={styles.sub_text}>If you are new to use</Text>
                    <FullSizeBtn 
                        bgColor={Colors.defaultWhite} 
                        txtColor={Colors.vivaMagenta} 
                        text='SIGN UP' 
                        onPress={() => navigation.navigate("Signup")} 
                    />
                    <View style={{ margin: 20 }}></View>
                </ImageBackground>
            </ImageBackground>
        </View>
    )
}

export default Home;