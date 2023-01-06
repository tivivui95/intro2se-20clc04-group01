import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput, TouchableOpacity, Slider } from "react-native";
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import Attributes from "../../../constants/Attributes";

const EnterBioHW = ({navigation}) => {
    return  (
    <View style={globalStyles.container}>
        <View style={styles.overlay}></View>
            <Pressable style={styles.back} onPress={() => navigation.navigate("EnterBio")}>
                <Image source={require('../../../assets/images/Pink_Back.png')}  alt='back' />
            </Pressable>
            <View style={[styles.ContainFrame]}>
                <Text style={globalStyles.blackTitleSmall}>
                    Enter your bio
                </Text>
                <Text style={{fontFamily: Attributes.PoppinsBold, color: Colors.vivaMagenta, fontSize: Attributes.largeFont, marginLeft: 70}}>
                    What's your height?
                </Text>
        <View style={[styles.Line_Pos]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} /> 
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
        </View>

        <Text style={{fontFamily: Attributes.PoppinsBold, color: Colors.vivaMagenta, fontSize: Attributes.largeFont, marginLeft: 70, marginTop:20}}>
            What's your weight?
        </Text>
        </View>

        <View style= {globalStyles.bottom_button}>
            <FullSizeBtn
        bgColor={Colors.softGreen}
        txtColor={Colors.defaultWhite}
        text='SAVE YOUR CHANGES'
        onPress={() => navigation.navigate("MainTabs")} />
        </View>
    </View>
    
    
            );

}

export default EnterBioHW;