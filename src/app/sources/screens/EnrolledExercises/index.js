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

const EnrolledExercises = ({ series, navigation }) => {
    const [data, changeData] = useState("");
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('START SESSION');

    const waitData = async () => {
        changeData(await GetSeries(series));
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
            <Pressable style={styles.back} onPress={() => navigation.goBack()}>
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
                    {data.exercises.map((item) => (<View key={item._id}>
                        <ExerciseImage onPress={() => navigation.navigate("DetailedExercise", { ex: item.id })} style={{width: 100, height: 100}} name={item.name} image={{ uri: Connections.serverURL + item.imagePath[0] }} />
                    </View>))}
                    {data.exercises.length % 3 == 1 ?
                    (<View>
                    </View>)  : data.exercises.length % 3 == 2 ? <View style={{width: 100, height: 100}}></View> : ""
                    }
                    {data.exercises.length % 3 == 1 ?
                    (<View style={{width: 100, height: 100}}>
                    </View>) : ""}
                </View>
                <View>
                    <FullSizeBtn    
                        bgColor={color=='START SESSION' ? Colors.softGreen : Colors.defaultWhite} 
                        txtColor={color=='START SESSION' ? Colors.defaultWhite : Colors.vivaMagenta} 
                        text={color} 
                        onPress={() => setColor('IN PROGRESS')} 
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
                    text='Setup Notification' 
                    onPress={() => navigation.navigate("NotiReminder")} 
                />
            </View>
        </View>
    );
}

export default EnrolledExercises;