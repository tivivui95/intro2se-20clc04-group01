import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Image, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Connections from "../../../constants/Connections";

import ExerciseImage from "../../components/ExerciseImage";

const ViewExercises = ({ navigation }) => {

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
                <Pressable style={styles.btn}>
                    <LinearGradient start={{x: 0.5, y: 0.5}} end={{x: 0.93, y: 0.5}} colors={['#EB0327', '#EB0349']} style={styles.btn_m}>
                        <Text style={styles.btn_text}>START PROCESS</Text>
                    </LinearGradient>
                </Pressable>
                <Text style={styles.title2}>Description: </Text>
                <Text>{data.descrip}</Text>
            </View>
            : ""}
            
        </View>
    );
}

export default ViewExercises;