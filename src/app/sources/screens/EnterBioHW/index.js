import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput, TouchableOpacity, Slider } from "react-native";
import {Slider} from "react-native-community"
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import Attributes from "../../../constants/Attributes";

const EnterBioHW = ({navigation}) => {
    return  (
    <View style={styles.container}>
        <View style={styles.overlay}></View>
        <Text style={globalStyles.blackTitleSmall}>
                    Enter your bio
        </Text>
        <Text style={{fontFamily: Attributes.PoppinsBold, color: Colors.vivaMagenta, fontSize: Attributes.largeFont}}>
            What's your height?
        </Text>
        <Slider></Slider>


        <View style={[styles.Line_Pos]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} /> 
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
        </View>

        <Text style={{fontFamily: Attributes.PoppinsBold, color: Colors.vivaMagenta, fontSize: Attributes.largeFont}}>
            What's your weight?
        </Text>

        <View style= {styles.Next_Pos}>
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