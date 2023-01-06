import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput, TouchableOpacity } from "react-native";
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import Attributes from "../../../constants/Attributes";

const EnterBio = ({ navigation }) => {

    const [ name, changeName ] = useState("");
    const [ lname, changelName ] = useState("");
    const [ gender, changeGender ] = useState(0);

    return  (
    <View style={globalStyles.container}>
        <View style={styles.overlay}></View>
        <View style={[styles.ContainFrame]}>
                <View style={{width: 356}}>
                <Text style={[globalStyles.blackTitleSmall, styles.left_1]}>
                    Enter your bio
                </Text>
                <Text style={{fontFamily: Attributes.PoppinsBold, color: Colors.vivaMagenta, fontSize: Attributes.largeFont, alignSelf: 'center'}}>
                    What's your name
                </Text>
                <Text style={{ alignSelf: 'center'}}>
                    Let's us know how to call you
                </Text>
                </View>
                
                <TextInput 
                    placeholder="First Name"
                    style={styles.text_input}
                    value={name}
                    onChangeText={changeName} /> 
                <TextInput 
                    placeholder="Last Name"
                    style={styles.text_input}
                    value={lname}
                    onChangeText={changelName} /> 
        </View>
        <View style={[styles.Line_Pos]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} /> 
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
        </View>
        <View style={[styles.MaleFemaleButton]}>
                <Text style={{fontFamily:Attributes.PoppinsBold, color:Colors.vivaMagenta,fontSize:Attributes.largeFont, alignSelf: 'center' }}>
                    What's your gender
                </Text>
                <View style={styles.Btn_Pos}>
                <FullSizeBtn    
                    bgColor={gender==0 ? Colors.vivaMagenta : Colors.defaultWhite} 
                    txtColor={gender==0 ? Colors.defaultWhite : Colors.vivaMagenta} 
                    text='MALE' 
                    onPress={() => changeGender(0)}
                    />
                </View>
                <View style={styles.Btn_Pos}>
                <FullSizeBtn    
                    bgColor={gender==1 ? Colors.vivaMagenta : Colors.defaultWhite} 
                    txtColor={gender==1 ? Colors.defaultWhite : Colors.vivaMagenta} 
                    text='FEMALE' 
                    onPress={() => changeGender(1)} 
                    />  
                </View>
                <View style={styles.Btn_Pos}>
                <FullSizeBtn    
                    bgColor={gender==2 ? Colors.vivaMagenta : Colors.defaultWhite} 
                    txtColor={gender==2 ? Colors.defaultWhite : Colors.vivaMagenta} 
                    text='NON-BINARY' 
                    onPress={() => changeGender(2)} 
                    />  
                </View>
        </View>
        <View style={{ marginTop: 56 }}>
                <FullSizeBtn    
                    bgColor={Colors.lightPink} 
                    txtColor={Colors.vivaMagenta} 
                    text='NEXT' 
                    onPress={() => navigation.navigate("EnterBioHW", {
                        name: name,
                        lname: lname,
                        gender: gender
                    })} 
                    />  
        </View>
    </View>
    
            );

}

export default EnterBio;