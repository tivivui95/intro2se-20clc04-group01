import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, View, Text, Image, Pressable, TextInput, FlatList, ListViewComponent } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

const HomeScreen = ({ navigation }) => {
    const [ data, changeData ] = useState("");
    const [isLoading, setLoading] = useState(true);
    const getAPI = async () => {
        try {
        const response = await fetch('https://ee23-171-226-38-247.ap.ngrok.io/ex/1');
        const my_data = await response.json();
        console.log(my_data);
        changeData(my_data);
       } catch (error) {
        console.error(error);
       } finally {
       }
     }
    useEffect(() => {
        // Run! Like go get some data from an API.
        getAPI();
      }, []);
    return (
    // <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.sayHello}>Hello
            <Text style={styles.name}> Toshiro</Text>
            </Text> 
            <Image 
                style={styles.ava_picture}
                source={require('../../../assets/images/profile.png')}
            />
            <Text style={styles.title}>Let's start your day</Text>
            <TextInput  style={styles.search_wrapper} 
                        placeholder={'Search exercise...'}/>
            {/* <View>
                <Image 
                style={styles.picture}
                source={require('../../../assets/images/squat.png')}
                />
                <Image 
                style={styles.picture}
                source={require('../../../assets/images/pushup.png')}
                />
            </View>

            <View>
                <Text style={styles.title_exercise}>Category</Text> 
            </View>

            <View>
                <Text style={styles.title_exercise}>In-progress</Text>
            </View>  */}
            <Text style={{ fontSize: 20, marginLeft: 32, fontWeight: 'bold',color: '#000000', marginBottom: 50}}>Today's Workout Plan</Text>
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