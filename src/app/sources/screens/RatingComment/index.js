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
                <Text style={styles.top_text}>
                    How do you like this exercise?
                </Text>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={{fontFamily: Attributes.PoppinsBold, color: Colors.vivaMagenta, fontSize: Attributes.largeFont, alignSelf: "center"}}>
                    Let us know your feeling
                </Text>
                <TextInput 
                    placeholder="Write Your Comment Here!"
                    style={styles.text_input} /> 
            </View>

        <View style= {styles.Next_Pos}>
            <FullSizeBtn
                bgColor={Colors.softGreen}
                txtColor={Colors.defaultWhite}
                text='SUBMIT'
                onPress={() => navigation.navigate("MainTabs")} />
        </View>
        <View style= {globalStyles.bottom_button}>
            <FullSizeBtn
                bgColor={Colors.defaultWhite}
                txtColor={Colors.softGreen}
                text='SKIP THIS PART'
                onPress={() => navigation.navigate("MainTabs")} />
        </View>
    </View>
    
    
            );

}

export default RatingComment;