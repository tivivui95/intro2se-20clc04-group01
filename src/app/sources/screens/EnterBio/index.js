import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput, TouchableOpacity } from "react-native";
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import Attributes from "../../../constants/Attributes";

const EnterBio = ({ navigation }) => {
    return  (
    <View style={globalStyles.container}>
        <View style={styles.overlay}></View>
        <View style={[styles.ContainFrame]}>
                <Text style={globalStyles.blackTitleSmall}>
                    Enter your bio
                </Text>
                <Text style={{fontFamily: Attributes.PoppinsBold, color: Colors.vivaMagenta, fontSize: Attributes.largeFont, marginLeft: 74}}>
                    What's your name
                </Text>
                <Text syle={globalStyles.blackTitleSmall}>
                    Let's us know how to call you
                </Text>
                <TextInput 
                    placeholder="First Name"
                    style={styles.text_input} /> 
                <TextInput 
                    placeholder="Last Name"
                    style={styles.text_input} /> 
        </View>
        <View style={[styles.Line_Pos]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} /> 
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
        </View>
        <View style={[styles.MaleFemaleButton]}>
                <Text style={{fontFamily:Attributes.PoppinsBold, color:Colors.vivaMagenta,fontSize:Attributes.largeFont, marginLeft: 70}}>
                    What's your gender
                </Text>
                <View style={styles.Btn_Pos}>
                <FullSizeBtn    
                    bgColor={Colors.defaultWhite} 
                    txtColor={Colors.vivaMagenta} 
                    text='MALE' 
                    />
                </View>
                <View style={styles.Btn_Pos}>
                <FullSizeBtn    
                    bgColor={Colors.defaultWhite} 
                    txtColor={Colors.vivaMagenta} 
                    text='FEMALE' 
                    // onPress={() => navigation.navigate("MainTabs")} 
                    />  
                </View>
                <View style={styles.Btn_Pos}>
                <FullSizeBtn    
                    bgColor={Colors.defaultWhite} 
                    txtColor={Colors.vivaMagenta} 
                    text='NON-BINARY' 
                    // onPress={() => navigation.navigate("MainTabs")} 
                    />  
                </View>
        </View>
        <View style={globalStyles.bottom_button}>
                <FullSizeBtn    
                    bgColor={Colors.lightPink} 
                    txtColor={Colors.vivaMagenta} 
                    text='NEXT' 
                    onPress={() => navigation.navigate("EnterBioHW")} 
                    />  
        </View>
    </View>
    
            );

}

export default EnterBio;