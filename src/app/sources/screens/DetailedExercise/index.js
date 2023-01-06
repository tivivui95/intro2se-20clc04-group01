import React, { useState, useEffect } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import LogoImage from '../../components/Logo';
import { UserState } from "realm";
import { GetSeries } from "../../functions/APIData";
import LoadingAnimation from "../../components/LoadingAnimation";

const DetailedExercise = ({ navigation }) => {
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
        <View style={globalStyles.container}>
            <View style={styles.overlay}></View>
            {data ?
            <Pressable style={[styles.back, {margin:10}]} onPress={() => navigation.navigate("EnrolledExercises")}>
                <Image source={require('../../../assets/images/back_btn.png')}  alt='back' />
                <Text style={styles.nameSe}>{data.name}</Text>
                <Text style={styles.nameEx}>Futter Kick</Text>
                <Text style={styles.title}> How to do this </Text>
                <View style={styles.wrapper}>
                    <Text> Step 1 </Text>
                </View>
                <Text style={[styles.title, {marginTop: 20}]}> Detail video for demo </Text>
                <View style={styles.video_wrapper}></View>
                
            </Pressable>
            :
            <View style={styles.loadingcontain}>
                <LoadingAnimation color={Math.floor(Math.random() * 12)} />
            </View>}
        </View>
    )
}

export default DetailedExercise;