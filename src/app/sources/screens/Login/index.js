import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from "./styles";

const Login = ({ navigation }) => {
    const [ username, changeUsername ] = useState("username");
    const [ password, changePassword ] = useState("password");
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg-2.png')} resizeMode="cover" style={styles.bg}>
                <View style={styles.overlay}></View>
                <Image source={require('../../../assets/images/logo-r.png')}  alt='logo' />
                <View style={styles.circle}>  
                    <TextInput 
                        value={username}
                        onChangeText={changeUsername}
                        style={styles.text_input} /> 
                    <Text style={styles.sub_text}>Forgot password?</Text>
                    <Pressable style={styles.btn}>
                        <LinearGradient start={{x: 0.5, y: 0.5}} end={{x: 0.93, y: 0.5}} colors={['#EB0327', '#EB0349']} style={styles.btn_m}>
                            <Text style={styles.btn_text}>SIGN IN</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;