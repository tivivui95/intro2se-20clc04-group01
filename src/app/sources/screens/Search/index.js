import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { TextInput, Pressable, Image } from "react-native";
import Colors from "../../../constants/Colors";
import globalStyles from "../globalStyles";
import LoadingAnimation from "../../components/LoadingAnimation";

import styles from "./style";
import { GetAllEx } from "../../functions/APIData";

const Search = ({ navigation }) => {
    const [data, changeData] = useState([]);
    const [count, setCount] = useState(0);
    // createUserInfo('Văn', 'Nguyễn', 'van23112002@gmail.com', 170, 65);

    const waitData = async () => {
        changeData(await GetAllEx());
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
            <Pressable style={styles.back} onPress={() => navigation.navigate("HomeScreen")} >
                <Image source={require('../../../assets/images/back_btn.png')} alt='back' />
            </Pressable>
            <View style={globalStyles.two_col}>
                <TextInput
                    style={styles.text_input}
                    placeholder={'Search exercise...'}
                    placeholderTextColor='rgba(0,0,0,0.5)'
                    width = '85%'
                />
                <Pressable style={styles.search_btn} onPress={() => navigation.navigate("HomeScreen")} >
                    <Image source={require('../../../assets/images/back_btn.png')} alt='back' />
                </Pressable>
            </View>
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
}

export default Search;