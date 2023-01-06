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
import { GetEx, GetSeries } from "../../functions/APIData";
import LoadingAnimation from "../../components/LoadingAnimation";
import Attributes from "../../../constants/Attributes";

import { WebView } from 'react-native-webview';

const DetailedExercise = ({ route, navigation }) => {
    const [data, changeData] = useState("");
    const [count, setCount] = useState(0);
    const { ex } = route.params;
    const waitData = async () => {
        changeData(await GetEx(ex));
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
            <View>
                <Pressable style={[styles.back, {margin:10}]} onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/images/back_btn.png')}  alt='back' />
                </Pressable>
                <Text style={styles.nameSe}>{data.series.name}</Text>
                <Text style={styles.nameEx}>{data.name}</Text>
                <Text style={styles.title}> How to do this </Text>
                <View style={{margin: 14}}>
                    <Text style={{ fontFamily: Attributes.QuicksandSemiBold, textAlign: 'justify' }}>{data.descrip}</Text>
                </View>
                <Text style={[styles.title, {marginTop: 20}]}> Detail video for demo </Text>
                <View style={styles.video_wrapper}>
                <WebView
                 style={{ width: 356, height: 200, borderRadius: 10, alignSelf: 'center' } }
                 javaScriptEnabled={true}
                 domStorageEnabled={true}
                 source={{ uri: 'https://youtube.com/embed/' + data.video }} />
                </View>
            </View>
            :
            <View style={styles.loadingcontain}>
                <LoadingAnimation color={Math.floor(Math.random() * 12)} />
            </View>}
            <View style={globalStyles.bottom_button}>
                <FullSizeBtn    
                    bgColor={Colors.softGreen} 
                    txtColor={Colors.defaultWhite} 
                    text='MARK AS DONE' 
                    onPress={() => navigation.navigate("RatingComment")} 
                />
            </View>
        </View>
    )
}

export default DetailedExercise;