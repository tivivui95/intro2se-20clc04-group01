import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput, Switch, Platform, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import FullSizeBtn from "../../components/FullSizeBtn";

import globalStyles from "../globalStyles";
import styles from "./styles";

import Colors from '../../../constants/Colors';
import LogoImage from '../../components/Logo';

import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';

const NotiReminder = ({ navigation }) => {
    // on/off switch
    const [isEnabled, setIsEnabled] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // check-box
    const[state, setState] = useState(remind=false);
    const[toggleButton, setToggleButton]= useState(false);

    // date picker
    const[date, setDate] = useState(new Date());
    const[mode, setMode] = useState('date');
    const[show, setShow] = useState(false);
    const[text, setText] = useState('Empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS==='android');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hour: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        setText(fDate + '\n' + fTime)

        console.log(fDate + ' (' + fTime + ') ')
    }
    const showMode = (currentMode) =>{
        setShow(true);
        setMode(currentMode);
    }
    
    return (
        <View style={globalStyles.container}>
            <View style={styles.overlay}></View>
            <View style={[styles.row, {marginTop: 50, marginLeft: 24}]}>
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
            <View style={styles.row}>
                <Text style={[styles.smallText, {marginRight:230}]}>Remind everday</Text>
                <CheckBox
                disabled={false}
                value={state.remind}
                onValueChange={(value) => setState({...state, remind:value})}
                />
            </View>
            <Text style={{fontWeight:'bold', fontSize: 20}}>{text}</Text>
            <View style={{margin:20}}>
                <Button title="DatePicker" onPress={() => showMode('date')}/>
            </View>
            <View style={{margin:20}}>
                <Button title="TimePicker" onPress={() => showMode('time')}/>
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
            />)}
        </View>
    )
}

export default NotiReminder;