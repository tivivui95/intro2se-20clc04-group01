import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput, TouchableOpacity } from "react-native";
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import Attributes from "../../../constants/Attributes";


const RatingComment = ({navigation}) => {
    const [data] = useState("");

    return  (
    <View style={globalStyles.container}>
        <View style={styles.overlay}></View>
            <View style={[styles.ContainFrame]}>
                <View style={[styles.top]}>
                    <View>
                        <Text style={styles.top_text}> How do you like this exercise? </Text>
                        <Text style={styles.title}>{data.name}</Text>
                    </View>
                    <View>
                            <Image source={require('../../../assets/images/profile.png')}  alt='profile' />
                    </View>
                </View>
                <Text style={{fontFamily: Attributes.PoppinsBold, color: Colors.vivaMagenta, fontSize: Attributes.largeFont, alignSelf: "center",marginTop:20}}>
                    Let us know your feeling
                </Text>
            </View>
            <View style={[styles.ContainFrame]}>
                <Text style={globalStyles.blackTitleSmall}>Rating: </Text>
                <Text style={globalStyles.blackTitleSmall}>Comment: </Text>
                <TextInput 
                    placeholder="Write Your Comment Here!"
                    style={styles.text_input} /> 
            </View>

        <View style= {globalStyles.above_bottom_button}>
            <FullSizeBtn
                bgColor={Colors.softGreen}
                txtColor={Colors.defaultWhite}
                text='SUBMIT'
                onPress={() => navigation.navigate("MainTabs")} />
        </View>
        <View style= {globalStyles.bottom_button}>
            <FullSizeBtn
                bgColor={Colors.defaultWhite}
                txtColor={Colors.softBlue}
                text='SKIP THIS STEP'
                onPress={() => navigation.navigate("MainTabs")} />
        </View>
    </View>
    
    
            );

}

export default RatingComment;