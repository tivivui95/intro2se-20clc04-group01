import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput, Switch} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import LogoImage from '../../components/Logo';

const NotiReminder = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={globalStyles.container}>
            <View style={styles.overlay}></View>
            <View style={styles.TopNotiFrame}>
                <Text style={styles.titleNoti}>
                    Notification and Reminder
                </Text> 
                <Switch
                    trackColor={{ false: "#767577", true: "#BB2649" }}
                    thumbColor={isEnabled ? "#BB2649" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}/>
            </View>
            <Text style={styles.smallText}>Reminder starts at 7:00 am every day.</Text>
            <Text style={[styles.smallText, { marginTop:50 }]}>Remind everday</Text>
            {/* <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            /> */}
        </View>
    )
}

export default NotiReminder;