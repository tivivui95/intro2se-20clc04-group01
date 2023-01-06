import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import { TextInput, Pressable, Image, TouchableHighlight, Alert } from "react-native";
import Colors from "../../../constants/Colors";
import globalStyles from "../globalStyles";
import LoadingAnimation from "../../components/LoadingAnimation";

import styles from "./style";
import { GetAllEx, SearchEx } from "../../functions/APIData";

const Search = ({ navigation }) => {
    const [data, changeData] = useState([]);
    const [count, setCount] = useState(0);
    const [text = '', setText] = useState('');
    const [firsttime = false, setFirstTime] = useState(true);
    // createUserInfo('Văn', 'Nguyễn', 'van23112002@gmail.com', 170, 65);

    const waitData = async () => {
        changeData(await GetAllEx());
    }
    const searchData = async () => {
        changeData(await SearchEx(text))
    }

    loadData = async () => {
        if (text == '') {
            waitData();
        }
        else {
            searchData(text);
        }
        if (data[0] == null && firsttime) {
            setFirstTime(false);
            Alert.alert(
                "No exercises require.",
                "Do you want to view all exercises?",
                [
                    // The "Yes" button
                    {
                        text: "Yes",
                        onPress: () => {
                            waitData();
                            setText('');
                            setFirstTime(true);
                        },
                    },
                    {
                        text: "No",
                        onPress: () => {
                            setFirstTime(false)
                        },
                    },
                ],
                { cancelable: false }
            );
        }
    }

    onSubmitEdit = async () => {
        this.loadData();
    }

    useEffect(() => {
        // Run! Like go get some data from an API.
        waitData();
        const countTimer = setInterval(() => {
            this.loadData()
            setCount((prevCount) => prevCount + 1);
        }, 2000);
        return function cleanup() {
            clearInterval(countTimer);
        };
    }, []);
    return (
        <View style={[globalStyles.roundPadding, globalStyles.container, styles.container]}>
            <Pressable style={styles.back} onPress={() => navigation.navigate("HomeScreen")} >
                <Image source={require('../../../assets/images/Pink_Back.png')} alt='back' />
            </Pressable>
            <View style={globalStyles.two_col}>
                <TextInput
                    style={styles.text_input}
                    placeholder={'Search exercise...'}
                    placeholderTextColor='rgba(0,0,0,0.5)'
                    onSubmitEditing={this.onSubmitEdit}
                    width='90%'
                    onChangeText={(text) => {
                        setText(text);
                        setFirstTime(true);
                    }}
                    value={text}
                />
                <TouchableHighlight style={styles.search_btn} onPress={this.onSubmitEdit}>
                    <Image source={require('../../../assets/images/search_btn.png')} alt='search' />
                </TouchableHighlight>
            </View>
            <ScrollView contentContainerStyle={globalStyles.two_col}>
                {data[0] ? data.map((item) =>
                    <ExPanel key={item._id} title={item.name} image={item.imagePath[0]} width='47%' style={styles.ex_today} />
                ) :
                    <View style={styles.loadingcontain}>
                        <LoadingAnimation color={Math.floor(Math.random() * 12)} />
                    </View>
                }
            </ScrollView>
        </View>
    );
}

export default Search;