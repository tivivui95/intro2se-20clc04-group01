import React, { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, View, Text, Image, Pressable, TextInput, FlatList, ListViewComponent,TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

import Attributes from "../../../constants/Attributes";
import styles from "./styles";
import { getUserInfo, modifyUserInfo, createUserInfo, deleteCur, deleteUserDB } from "../../functions/realmDB";
import globalStyles from "../globalStyles";

const ViewProfile = ({ navigation }) => {
    const [ data, changeData ] = useState("");
    const [isLoading, setLoading] = useState(true);
    const userInfo = getUserInfo();
    useEffect(() => {
        // Run! Like go get some data from an API.
        // getAPI();
      }, []);
    return (
    // <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Image 
                style={styles.ava_picture}
                source={require('../../../assets/images/bg-2.png')}
            />
            <Text style={styles.userName}>{userInfo.user_name}</Text>
            <Text style={styles.nickname}>{userInfo.user_lastname}</Text>

            <View style={{margin: 8}}></View>

            <View style={styles.text_wrapper}>
                    <Text style={{ fontFamily: Attributes.PoppinsBold, color: '#000000', fontSize: Attributes.smallFont }}>
                        Email:  
                        <Text style={styles.exercise_text}>  {userInfo.user_email}</Text>
                    </Text>
            </View>

            <View style={styles.text_wrapper}>
                    <Text style={{ fontFamily: Attributes.PoppinsBold, color: '#000000', fontSize: Attributes.smallFont }}>
                        Gender:  
                        <Text style={styles.exercise_text}>  {userInfo.user_gender==1 ? "Female" : userInfo.user_gender==0 ? "Male" : "Non-binary"}</Text>
                    </Text>
            </View>

            <View style={styles.text_wrapper}>
                    <Text style={{ fontFamily: Attributes.PoppinsBold, color: '#000000', fontSize: Attributes.smallFont}}>
                        Height:  
                        <Text style={styles.exercise_text}>  {userInfo.user_height} cm</Text>
                    </Text>
            </View>

            <View style={styles.text_wrapper}>
                    <Text style={{ fontFamily: Attributes.PoppinsBold, color: '#000000', fontSize: Attributes.smallFont }}>
                        Weight:  
                        <Text style={styles.exercise_text}>  {userInfo.user_weights} kg</Text>
                    </Text>
            </View>
            <View style={{margin: 12,}}></View>
            <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")} style={styles.button}>
                    <Text style={styles.changePassword}>CHANGE PASSWORD</Text>
            </TouchableOpacity> 
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => {
                deleteCur();
                navigation.navigate("Home");
                }} style={styles.button_small}>
                    <Text style={styles.signout}>SIGN OUT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                deleteCur();
                deleteUserDB();
                navigation.navigate("Home");
                }} style={styles.button_small}>
                    <Text style={styles.signout}>SIGN OUT AND CLEAR DATA</Text>
            </TouchableOpacity>
            </View>
            
            
        </View>
        
        );
};

export default ViewProfile;