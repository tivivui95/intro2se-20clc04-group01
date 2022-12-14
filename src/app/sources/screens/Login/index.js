import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import FullSizeBtn from "../../components/FullSizeBtn";
import styles from "./styles";
import Colors from '../../../constants/Colors';
import LogoImage from '../../components/Logo';

const Login = ({ navigation }) => {
    const [ username, changeUsername ] = useState("");
    const [ password, changePassword ] = useState("");
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg-2.png')} resizeMode="cover" style={styles.bg}>
                <View style={styles.overlay}></View>
                <LogoImage center={true} color='p' />
                <View style={styles.circle}>  
                    <TextInput 
                        inlineImageLeft='mail'
                        inlineImagePadding={30}
                        placeholder="Email"
                        value={username}
                        onChangeText={changeUsername}
                        style={styles.text_input} /> 
                    <TextInput 
                        inlineImageLeft='lock'
                        placeholder="Password"
                        inlineImagePadding={30}
                        value={password}
                        onChangeText={changePassword}
                        style={styles.text_input} /> 
                    <Text style={styles.sub_text}>Forgot password?</Text>
                    <FullSizeBtn 
                            bgColor={Colors.vivaMagenta} 
                            txtColor={Colors.defaultWhite} 
                            text='SIGN IN' 
                            onPress={() => navigation.navigate("Login")} 
                        />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;