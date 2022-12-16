import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput } from "react-native";
import FullSizeBtn from "../../components/FullSizeBtn";
import Colors from "../../../constants/Colors";
import styles from "./styles";
import LogoImage from "../../components/Logo";

const Signup = ({ navigation }) => {
    const [ username, changeUsername ] = useState("");
    const [ password, changePassword ] = useState("");
    const [ cfpassword, changeCfPassword ] = useState("");
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg-2.png')} resizeMode="cover" style={styles.bg}>
                <View style={styles.overlay}></View>
                <View style={styles.circle}>  
                    <LogoImage center={true} color='p' />
                    <TextInput 
                        placeholder="Email"
                        inlineImageLeft='mail'
                        inlineImagePadding={30}
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
                        value={cfpassword}
                        onChangeText={changeCfPassword}
                        style={styles.text_input} />
                    <View style={{ margin: 5 }}></View>
                    <FullSizeBtn 
                            bgColor={Colors.defaultWhite} 
                            txtColor={Colors.vivaMagenta} 
                            text='SIGN UP' 
                            onPress={() => navigation.navigate("HomeScreen")} 
                        />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Signup;