import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Image, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Connections from "../../../constants/Connections";

import ExerciseImage from "../../components/ExerciseImage";

import FullSizeBtn from "../../components/FullSizeBtn";
import Colors from "../../../constants/Colors";
import ViewExercises from "../ViewExercises";
import globalStyles from "../globalStyles";

const EnrolledExercises = ({ navigation }) => {
    const [ data, changeData ] = useState("");

    const getAPI = async () => {
        try {
         const response = await fetch(Connections.serverURL + '/series/1');
         const data_2 = await response.json();
         console.log(data_2);
         changeData(data_2);
       } catch (error) {
         console.error(error);
       } finally {
       }
     }

    useEffect(() => {
        getAPI();
      }, []);
      
    return (
        <View style={styles.container}>
            <Pressable style={styles.back} onPress={() => navigation.navigate("Home")}>
            <Image source={require('../../../assets/images/back_btn.png')}  alt='back' />
            </Pressable>
            {data ?
            <View style={styles.main}>
                <View style={styles.top}>
                    <View>
                        <Text style={styles.top_text}>Work hard, and harder</Text>
                        <Text style={styles.title}>{data.name}</Text>
                    </View>
                    <View>
                        <Image source={require('../../../assets/images/profile.png')}  alt='profile' />
                    </View>
                </View>
                <Text style={styles.text}>Duration: <Text style={{ fontWeight: 'bold' }}>{data.exercises.length} days</Text></Text>
                <View style={styles.top}>
                    {data.exercises.map((item) => (<View key={item._id}>
                        <ExerciseImage name={item.name} />
                    </View>))}
                </View>
                <View>
                    <FullSizeBtn    
                        bgColor={Colors.softGreen} 
                        txtColor={Colors.defaultWhite} 
                        text='START SESSION' 
                        onPress={() => navigation.navigate("MainTabs")} 
                    />
                </View>
                <Text style={styles.title2}>Description: </Text>
                <Text>{data.descrip}</Text>
                <View style={{marginTop: 80}}>
                    <FullSizeBtn    
                        bgColor={Colors.defaultWhite} 
                        txtColor={Colors.vivaMagenta} 
                        text='Notification Setting' 
                        onPress={() => navigation.navigate("NotiReminder")} 
                    />
                </View>
            </View>
            : ""}
            
        </View>
    );
}

export default EnrolledExercises;