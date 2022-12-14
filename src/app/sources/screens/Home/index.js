import React, { useState, useEffect } from "react";
import { ImageBackground, View, Text, Image, Pressable, SliderComponent } from "react-native";
import * as Animatable from 'react-native-animatable';
import FullSizeBtn from "../../components/FullSizeBtn";
import Colors from '../../../constants/Colors';

import styles from "./styles";

import LoadingAnimation from "../../components/LoadingAnimation";
import LogoImage from '../../components/Logo';

function Home({ navigation }) {

    const [count, setCount] = useState(0);
    useEffect(() => {
        // increment the count by 1
        const countTimer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
        // every 1000 milliseconds
        }, 2000);
        // and clear this timer when the component is unmounted
        return function cleanup() {
        clearInterval(countTimer);
        };
    });

    return (
        <View style={styles.container}>
            {count < 1 ? 
            <LoadingAnimation color={Math.floor(Math.random() * 12)} />:
                <ImageBackground source={require('../../../assets/images/bg-2.png')} resizeMode="cover" style={styles.bg}>
                    <LogoImage center={true} color='w' />
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
            }            
        </View>
    )
}

export default Home;