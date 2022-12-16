import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, View, Text, Image, Pressable, TextInput, FlatList, ListViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Realm from "realm";

import Connections from '../../../constants/Connections';
import Colors from "../../../constants/Colors";
import styles from "./styles";  

import LoadingAnimation from '../../components/LoadingAnimation';

const HomeScreen = ({ navigation }) => {
    const [ data, changeData ] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [ connectState, changeConnectState ] = useState(false);
    const realm = new Realm({ path: 'UserDatabase.realm' }); 
    const userInfo = realm.objects('user_details')[0]
    // const realmData = () => {
    //     realm.write(() => {
    //         realm.create('user_details', {
    //             user_id: 0,
    //             user_name: 'Minh Văn',
    //             user_lastname: 'Nguyễn',
    //             user_email: 'van23112002@gmail.com',
    //             user_height: 170,
    //             user_weights: 65
    //           });
    //     });
    // }

    const getAPI = async () => {
        try {
            const response = await fetch(Connections.serverURL + '/ex/1');
            const my_data = await response.json();
            console.log(my_data);
            changeData(my_data);
       } catch (error) {
            // console.error(error);
            changeConnectState(true);
       } finally {
       }
    }
    useEffect(() => {
        // Run! Like go get some data from an API.
        getAPI();
        // realmData();
      }, []);
    return (    
        <View style={styles.container}>
            <View style={styles.top_contain}>
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
            <Text style={styles.title_text}>Today's Workout Plan</Text>
            <View style={styles.exercise_wrapper}>
                <ImageBackground style={styles.picture} source={require('../../../assets/images/pushup.png')} resizeMode='cover'>
                    <Text style={{ fontWeight:'bold', color: '#FFFFFF', fontSize: 15 }}>
                        Exercise ID:  
                        <Text style={styles.exercise_text}>  {data.id}</Text>
                    </Text>
                    <Text style={{ fontWeight:'bold', color: '#FFFFFF', fontSize: 15 }}>
                        Name:  
                        <Text style={styles.exercise_text}>  {data.name}</Text>
                    </Text>
                    <Text style={{ fontWeight:'bold', color: '#FFFFFF', fontSize: 15 }}>
                        Description:  
                        <Text style={styles.exercise_text}>  {data.descrip}</Text>
                    </Text>
                    <Text style={{ fontWeight:'bold', color: '#FFFFFF', fontSize: 15 }}>
                        Duration:  
                        <Text style={styles.exercise_text}>  {data.duration}</Text>
                    </Text>
                </ImageBackground>
            </View>
        </View>
        );
};

export default HomeScreen;