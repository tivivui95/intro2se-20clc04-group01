import React, { useState, useEffect } from "react";
import { ImageBackground, View, Text, Image, Pressable, SliderComponent } from "react-native";

import FullSizeBtn from "../../components/FullSizeBtn";
import Colors from '../../../constants/Colors';

import styles from "./styles";
import globalStyles from "../globalStyles";

import LoadingAnimation from "../../components/LoadingAnimation";
import LogoImage from '../../components/Logo';

function Home({ navigation }) {

    const [count, setCount] = useState(0);
    useEffect(() => {
        const countTimer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
        }, 1000);
        return function cleanup() {
        clearInterval(countTimer);
        };
    });

    return (
        <View style={globalStyles.container}>
            {count < 2 ? 
            <LoadingAnimation color={Math.floor(Math.random() * 12)} />:
                <ImageBackground 
                  source={require('../../../assets/images/bg-2.png')} 
                  resizeMode="cover" 
                  style={globalStyles.center_container}
                >
                    <LogoImage center={true} color='w' />
                    <View style={styles.overlay}></View>
                    <ImageBackground 
                      source={require('../../../assets/images/intro_img.png')} 
                      resizeMode="cover" 
                      style={[styles.circle, globalStyles.bottom_flex]}>   
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