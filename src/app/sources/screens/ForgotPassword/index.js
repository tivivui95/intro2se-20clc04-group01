import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput } from "react-native";
import FullSizeBtn from "../../components/FullSizeBtn";
import Colors from "../../../constants/Colors";

import styles from "./styles";
import globalStyles from "../globalStyles";

import LogoImage from "../../components/Logo";

const ForgotPassword = ({ navigation }) => {
    const [ username, changeUsername ] = useState("");
    const [ password, changePassword ] = useState("");
    const [ cfpassword, changeCfPassword ] = useState("");
    return (
        <View style={globalStyles.container}>
            <Pressable style={[globalStyles.back]} onPress={() => navigation.goBack()} >
                <Image source={require('../../../assets/images/Pink_Back.png')} alt='back' />
            </Pressable>
            <ImageBackground 
              source={require('../../../assets/images/bg-2.png')} 
              resizeMode="cover" 
              style={[globalStyles.center_container]}
            >
                <View style={styles.overlay}></View>
                <View style={[styles.bottom, globalStyles.bottom_flex]}>  
                    <LogoImage center={true} color='p' />
                    <Text style={globalStyles.blackTitle}>Forgot password</Text>
                    <TextInput 
                        placeholder="Email"
                        inlineImageLeft='mail'
                        inlineImagePadding={30}
                        secureTextEntry={true}
                        value={username}
                        onChangeText={changeUsername}
                        style={styles.text_input} />
                    <TextInput 
                        placeholder="Password"
                        inlineImageLeft='lock'
                        inlineImagePadding={30}
                        value={password}
                        onChangeText={changePassword}
                        style={styles.text_input} /> 
                    <TextInput 
                        placeholder="Confirm Password"
                        inlineImageLeft='lock'
                        inlineImagePadding={30}
                        secureTextEntry={true}
                        value={cfpassword}
                        onChangeText={changeCfPassword}
                        style={styles.text_input} />
                    <View style={{ margin: 5 }}></View>
                    <FullSizeBtn 
                            bgColor={Colors.vivaMagenta} 
                            txtColor={Colors.defaultWhite} 
                            text='SAVE CHANGE' 
                            onPress={() => navigation.navigate("Login")} 
                        />
                </View>
            </ImageBackground>
        </View>
    )
}

export default ForgotPassword;