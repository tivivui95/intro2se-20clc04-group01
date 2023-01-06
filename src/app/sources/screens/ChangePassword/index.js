import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import LogoImage from '../../components/Logo';
import { UserState } from "realm";

const ChangePassword = ({ navigation }) => {
    const [ currentpassword, changeCurrentPassword ] = useState("");
    const [ newpassword, changeNewPassword ] = useState("");
    const [ cfpassword, changeCfPassword ] = useState("");
    return (
        <View style={globalStyles.container}>
            <View style={styles.overlay}></View>
            <Pressable style={[styles.back, {margin:10}]} onPress={() => navigation.goBack()}>
                <Image source={require('../../../assets/images/Black_Back.png')}  alt='back' />
            </Pressable>
            <View style={[globalStyles.center_container, globalStyles.bottom_flex]}>
                    <Text style={globalStyles.blackTitleSmall}>
                            <Icon name="key" size={20} color="#000000"/>
                        Change Password
                    </Text>
                    <TextInput 
                        inlineImageLeft='lock'
                        inlineImagePadding={30}
                        placeholder="Current password"
                        value={currentpassword}
                        onChangeText={changeCurrentPassword}
                        style={styles.text_input} /> 
                    <TextInput 
                        inlineImageLeft='lock'
                        placeholder="New password"
                        inlineImagePadding={30}
                        value={newpassword}
                        onChangeText={changeNewPassword}
                        style={styles.text_input} /> 
                    <TextInput 
                        inlineImageLeft='lock'
                        placeholder="Confirmation new password"
                        inlineImagePadding={30}
                        value={cfpassword}
                        onChangeText={changeCfPassword}
                        style={styles.text_input} /> 
                    <View style={{margin: 6}}></View>
                    <FullSizeBtn    
                    bgColor={Colors.lightPink} 
                    txtColor={Colors.vivaMagenta} 
                    text='SAVE YOUR CHANGE' 
                    onPress={() => navigation.navigate("ViewProfile")} 
                    />
                    <View style={{margin: 24}}></View>
                </View>
        </View>
    )
}

export default ChangePassword;