import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput, FlatList, ListViewComponent } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from "./styles";

const HomeScreen = ({ navigation }) => {

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

        <View>
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
        </View>
    </View>
    )
}

export default HomeScreen;