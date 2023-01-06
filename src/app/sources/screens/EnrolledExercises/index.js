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

import { GetSeries } from "../../functions/APIData";
import LoadingAnimation from "../../components/LoadingAnimation";

const EnrolledExercises = ({ navigation }) => {
    const [data, changeData] = useState("");
    const [count, setCount] = useState(0);

    const waitData = async () => {
        changeData(await GetSeries(1));
    }

    onSubmitEdit = () => {
        alert('HI')
    }

    useEffect(() => {
        // Run! Like go get some data from an API.
        waitData();
        const countTimer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 5000);
        return function cleanup() {
            clearInterval(countTimer);
        };
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
                <View style={globalStyles.mini_exercise}>
                    {data.exercises.map((item) => (<View style={{alignContent:'space-around'}}key={item._id}>
                        <ExerciseImage name={item.name} />
                    </View>))}
                </View>
                <View>
                    <FullSizeBtn    
                        bgColor={Colors.softGreen} 
                        txtColor={Colors.defaultWhite} 
                        text='START SESSION' 
                        onPress={() => {console.log("Change color")}} 
                    />
                </View>
                <Text style={styles.title2}>Description: </Text>
                <Text>{data.descrip}</Text>
            </View>
            : 
            <View style={styles.loadingcontain}>
                <LoadingAnimation color={Math.floor(Math.random() * 12)} />
            </View>}
            <View style={globalStyles.bottom_button}>
                <FullSizeBtn    
                    bgColor={Colors.defaultWhite} 
                    txtColor={Colors.vivaMagenta} 
                    text='Notification Setting' 
                    onPress={() => navigation.navigate("NotiReminder")} 
                />
            </View>
        </View>
    );
}

export default EnrolledExercises;