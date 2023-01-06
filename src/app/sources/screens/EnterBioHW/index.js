import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput, TouchableOpacity, Slider } from "react-native";
import FullSizeBtn from "../../components/FullSizeBtn";
import { Picker } from 'react-native-wheel-pick';

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import Attributes from "../../../constants/Attributes";
import { createUserInfo, getCurSession } from "../../functions/realmDB";

const EnterBioHW = ({ route, navigation }) => {

    const { name, lname, gender } = route.params;
    const [ weight, setWeight ] = useState(40);
    const [ height, setHeight ] = useState(150);

    const SaveData = () => {
        const curUser = getCurSession();
        createUserInfo(name, lname, gender, curUser, Number(height), Number(weight));
        navigation.navigate("MainTabs");
    }

    return  (
        <View style={[globalStyles.roundPadding, globalStyles.container, styles.container]}>
            <Pressable style={styles.back} onPress={() => navigation.navigate("HomeScreen")} >
                <Image source={require('../../../assets/images/Pink_Back.png')} alt='back' />
            </Pressable>
            <View style={[styles.ContainFrame]}>
                <Text style={globalStyles.blackTitleSmall}>
                    Enter your bio
                </Text>
                <Text style={{fontFamily: Attributes.PoppinsBold, color: Colors.vivaMagenta, fontSize: Attributes.largeFont, alignSelf: 'center'}}>
                    What's your height?
                </Text>
                <View>
                <Picker
                textColor={Colors.vivaMagenta}
                textSize={Attributes.largeFont}                
                style={{ backgroundColor: 'rgba(0,0,0,0)', width: '100%', height: 200 }}
                selectedValue={height}
                pickerData={[...Array(250 - 50 + 1).keys()].map(x => x + 50)}
                onValueChange={setHeight}
                />
                <Text style={{ fontFamily: Attributes.PoppinsBold, fontSize: Attributes.regularFont, alignSelf: 'center' }}>cm</Text>
                </View>
        <View style={[styles.Line_Pos]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} /> 
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
        </View>

        <Text style={{fontFamily: Attributes.PoppinsBold, color: Colors.vivaMagenta, fontSize: Attributes.largeFont, marginTop:20, alignSelf: 'center'}}>
            What's your weight?
        </Text>
        <View>
                <Picker
                textColor={Colors.vivaMagenta}
                textSize={Attributes.largeFont}                
                style={{ backgroundColor: 'rgba(0,0,0,0)', width: '100%', height: 200 }}
                selectedValue={weight}
                pickerData={[...Array(400 - 10 + 1).keys()].map(x => x + 10)}
                onValueChange={setWeight}
                />
                <Text style={{ fontFamily: Attributes.PoppinsBold, fontSize: Attributes.regularFont, alignSelf: 'center' }}>cm</Text>
                </View>
        </View>

        <View style= {globalStyles.bottom_button}>
            <FullSizeBtn
        bgColor={Colors.softGreen}
        txtColor={Colors.defaultWhite}
        text='SAVE YOUR CHANGES'
        onPress={() => SaveData()} />
        </View>
    </View>
    
    
            );

}

export default EnterBioHW;