import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, View, Text, Image, Pressable, TextInput, FlatList, ListViewComponent,TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

const ViewProfile = ({ navigation }) => {
    const [ data, changeData ] = useState("");
    const [isLoading, setLoading] = useState(true);
    const getAPI = async () => {
        try {
        const response = await fetch('https://d200-171-226-38-247.ap.ngrok.io/ex/1');
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
            <Text style={styles.userName}>Duong Minh Tung</Text>
            <Text style={styles.nickname}>Toshiro</Text>

            <Image 
                style={styles.ava_picture}
                source={require('../../../assets/images/profile.png')}
            />

            <View style={styles.name_wrapper}>
                    <Text style={{ fontWeight:'bold', color: '#000000', fontSize: 15 }}>
                        Email:  
                        <Text style={styles.exercise_text}>  {data.name}</Text>
                    </Text>
            </View>

            <View style={styles.gender_wrapper}>
                    <Text style={{ fontWeight:'bold', color: '#000000', fontSize: 15 }}>
                        Gender:  
                        <Text style={styles.exercise_text}>  {data.descrip}</Text>
                    </Text>
            </View>

            <View style={styles.height_wrapper}>
                    <Text style={{ fontWeight:'bold', color: '#000000', fontSize: 15 }}>
                        Height:  
                        <Text style={styles.exercise_text}>  {data.id}</Text>
                    </Text>
            </View>

            <View style={styles.weight_wrapper}>
                    <Text style={{ fontWeight:'bold', color: '#000000', fontSize: 15 }}>
                        Weight:  
                        <Text style={styles.exercise_text}>  {data.duration}</Text>
                    </Text>
            </View>

            <TouchableOpacity style={styles.button}>
                    <Text style={styles.signout}> SIGN OUT</Text>
            </TouchableOpacity> 
        </View>
        
        );
};

export default ViewProfile;