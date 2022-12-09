import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, View, Text, Image, Pressable, TextInput, FlatList, ListViewComponent } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from "./styles";

const HomeScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getAPI = async () => {
        try {
         const response = await fetch('https://reactnative.dev/movies.json');
         const json = await response.json(); //ngu vcl
         setData(json.movies);
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
    }
    useEffect(() => {
        getAPI();
    }, []);

    return(
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
            <Text style={styles.title_exercise}>Today Workout Plan</Text>
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
        </View> */}
        <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <Text>{item.title}, {item.releaseYear}</Text>
            )}
            />
        )}
        </View>
    </View>
    );
};

export default HomeScreen;