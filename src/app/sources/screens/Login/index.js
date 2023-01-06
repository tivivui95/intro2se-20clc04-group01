import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import LogoImage from '../../components/Logo';

import { LoginAPI } from "../../functions/APIData";
import { saveCurSession, getUserInfo } from "../../functions/realmDB";

const Login = ({ navigation }) => {
    const [ username, changeUsername ] = useState("");
    const [ password, changePassword ] = useState("");

    const checkLogin = async () => {
        const response = await LoginAPI(username, password);
        console.log(response.email);
        if (response.email) {
            saveCurSession(response.email);
            const data = getUserInfo(response.email);
            if (data != "") navigation.navigate("MainTabs");
            else navigation.navigate("EnterBio");
        } else {
            alert(response);
        }
    }

    return (
        <View style={globalStyles.container}>
            <Pressable style={[globalStyles.back]} onPress={() => navigation.goBack()} >
                <Image source={require('../../../assets/images/Pink_Back.png')} alt='back' />
            </Pressable>
            <ImageBackground 
              source={require('../../../assets/images/bg-2.png')} 
              resizeMode="cover" 
              style={globalStyles.center_container}
            >
                <View style={styles.overlay}></View>
                <View style={[styles.bottom, globalStyles.bottom_flex]}>
                    <LogoImage center={true} color='p' />
                    <Text style={globalStyles.blackTitle}>Login</Text>  
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
                    <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={styles.sub_text}>Forgot password?</Text>
                    </Pressable>
                    
                    <FullSizeBtn 
                            bgColor={Colors.vivaMagenta} 
                            txtColor={Colors.defaultWhite} 
                            text='SIGN IN' 
                            onPress={checkLogin} 
                        />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;