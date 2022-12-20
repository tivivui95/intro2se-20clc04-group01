import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import LogoImage from '../../components/Logo';

const ChangePassword = ({ navigation }) => {
    const [ currentPassword, changeCurrentPassword ] = useState("");
    const [ newPassword, changeNewPassword ] = useState("");
    const [ con_newPassword, changeCon_NewPassword ] = useState("");
    return (
        <View style={globalStyles.container}>
            <View style={styles.overlay}></View>
            <View style={[styles.ChangePasswordFrame]}>
                    <Text style={globalStyles.blackTitleSmall}>
                            <Icon name="key" size={20} color="#000000"/>
                        Change Password
                    </Text>
                    <TextInput 
                        inlineImageLeft='lock'
                        inlineImagePadding={30}
                        placeholder="Current password"
                        value={currentPassword}
                        onChangeText={changeCurrentPassword}
                        style={styles.text_input} /> 
                    <TextInput 
                        inlineImageLeft='lock'
                        placeholder="New password"
                        inlineImagePadding={30}
                        value={newPassword}
                        onChangeText={changeNewPassword}
                        style={styles.text_input} /> 
                    <TextInput 
                        inlineImageLeft='lock'
                        placeholder="Confirmation new password"
                        inlineImagePadding={30}
                        value={con_newPassword}
                        onChangeText={changeCon_NewPassword}
                        style={styles.text_input} /> 
                    <View style={styles.Btn_Pos}>
                        <FullSizeBtn    
                                bgColor={Colors.vivaMagenta} 
                                txtColor={Colors.defaultWhite} 
                                text='SAVE CHANGE' 
                                onPress={() => navigation.navigate("MainTabs")} 
                        />
                    </View>
                </View>
        </View>
    )
}

export default ChangePassword;