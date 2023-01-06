import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, View, Text, Image, Pressable, TextInput, FlatList, ListViewComponent } from "react-native";

import globalStyles from "../globalStyles";
import styles from "./styles";

import LoadingAnimation from '../../components/LoadingAnimation';
import ExPanel from "../../components/ExPanel";

import { getUserInfo, modifyUserInfo, createUserInfo, deleteUserDB, getCurSession } from "../../functions/realmDB";
import { GetAllSeries } from "../../functions/APIData";
import Colors from "../../../constants/Colors";


const HomeScreen = ({ navigation }) => {
    const [data, changeData] = useState([]);
    const [count, setCount] = useState(0);
    // const [catergory, setCatergory] = useState([]);
    // createUserInfo('Văn', 'Nguyễn', 0, 'van23112002@gmail.com', 170, 65);
    const userInfo = getUserInfo(getCurSession());
    // deleteUserDB();
    // console.log(userInfo);
    const waitData = async () => {
        changeData(await GetAllSeries());
    }
    useEffect(() => {
        // Run! Like go get some data from an API.
        waitData();
        const countTimer = setInterval(() => {
            // console.log(typeof(data));
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
            <Pressable onPress={() => navigation.navigate("Search")}>
                <View pointerEvents="none">
                    <TextInput
                        style={styles.text_input}
                        placeholder={'Search exercise...'}
                        placeholderTextColor='rgba(0,0,0,0.5)'
                    />
                </View>
            </Pressable>

            <Text style={globalStyles.blackTitleSmall}>Today's Workout Plan</Text>
            <View style={globalStyles.two_col}>
                <ExPanel title='Push up' width='47%' style={styles.ex_today} />
                <ExPanel title='Hip hop' width='47%' style={styles.ex_today} />
            </View>
            <View style={{ padding: 10 }}></View>
            <Text style={globalStyles.blackTitleSmall}>Category</Text>
            <View style={globalStyles.two_col}>
                {data[0] ? data.map((item) =>
                    <ExPanel onPress={() => navigation.navigate("ViewExercises", { series: item.id})} key={item._id} title={item.name} image={item.imagePath[0]} width='47%' style={styles.ex_today} />
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