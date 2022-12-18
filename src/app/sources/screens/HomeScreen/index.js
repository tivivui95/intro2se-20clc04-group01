import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, View, Text, Image, Pressable, TextInput, FlatList, ListViewComponent } from "react-native";

import globalStyles from "../globalStyles";
import styles from "./styles";  

import LoadingAnimation from '../../components/LoadingAnimation';
import ExPanel from "../../components/ExPanel";

import { getUserInfo, modifyUserInfo, createUserInfo } from "../../functions/realmDB";
import { GetAllSeries } from "../../functions/APIData";

const HomeScreen = ({ navigation }) => {
    const [data, changeData] = useState([]);
    const [count, setCount] = useState(0);
    // createUserInfo('Văn', 'Nguyễn', 'van23112002@gmail.com', 170, 65);
    const userInfo = getUserInfo();

    const waitData = async () => {
        changeData(await GetAllSeries());
    }
    useEffect(() => {
        // Run! Like go get some data from an API.
        waitData();
        const countTimer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
            }, 2000);
            return function cleanup() {
            clearInterval(countTimer);
            };
      }, []);
    return (    
        <View style={[globalStyles.roundPadding, globalStyles.container, styles.container]}>
            <View style={globalStyles.two_col}>
                <View>
                    <Text style={styles.sayHello}>Hello
                        <Text style={styles.name}> {userInfo.user_name}</Text>
                    </Text>
                    <Text style={styles.title}>Let's start your day</Text>
                </View>
                <Image 
                    style={styles.ava_picture}
                    source={require('../../../assets/images/profile.png')}
                /> 
            </View>
            <TextInput  
                style={styles.text_input} 
                placeholder={'Search exercise...'} 
            />

            <Text style={globalStyles.blackTitleSmall}>Today's Workout Plan</Text>
            <View style={globalStyles.two_col}>
                <ExPanel title='Push up' width='47%' style={styles.ex_today} />
                <ExPanel title='Hip hop' width='47%' style={styles.ex_today} />
            </View>
            <View style={{ padding: 10 }}></View>
            <Text style={globalStyles.blackTitleSmall}>Category</Text>
            <View style={globalStyles.two_col}>
                {data[0] ? data.map((item) => 
                    <ExPanel key={item._id} title={item.name} width='47%' style={styles.ex_today} />
                ) : 
                <View style={styles.loadingcontain}>
                    <LoadingAnimation color={Math.floor(Math.random() * 12)} />
                </View>
                    
                }
            </View>
        </View>
        );
};

export default HomeScreen;