import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Pressable, TextInput, Switch, Platform, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import FullSizeBtn from "../../components/FullSizeBtn";
import SmallSizeBtn from "../../components/SmallSizeBtn";

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
    const[text, setText] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS==='ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fTime = ' at ' + tempDate.getHours() + ':' + tempDate.getMinutes();
        let fDate = ' on ' + tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        
        setText(fTime + fDate)

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
            <Text style={[styles.smallText, {marginTop : 150}]}>Reminder starts
                <Text style={{fontWeight:'bold'}}>{text}</Text>
            </Text>
            {/* <Text style={[styles.smallText, {fontWeight:'bold'}]}>{text}</Text> */}
            <View style={styles.row}>
                <Text style={[styles.smallText, {marginRight:200}]}>Remind everday</Text>
                <CheckBox
                disabled={false}
                value={state.remind}
                onValueChange={(value) => setState({...state, remind:value})}
                />
            </View>
            <View style={{marginTop: 250, marginBottom: 20}}>
                {/* <Button title="DatePicker" onPress={() => showMode('date')}/> */}
                <SmallSizeBtn    
                    bgColor={Colors.defaultWhite} 
                    txtColor={Colors.vivaMagenta} 
                    text='Set date' 
                    onPress={() => showMode('date')} 
                />
            </View>
            <View style={{margin:20}}>
                {/* <Button title="TimePicker" onPress={() => showMode('time')}/> */}
                <SmallSizeBtn    
                    bgColor={Colors.defaultWhite} 
                    txtColor={Colors.vivaMagenta} 
                    text='Set time' 
                    onPress={() => showMode('time')} 
                />
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
            <View style={globalStyles.bottom_button}>
                <FullSizeBtn    
                    bgColor={Colors.lightPink} 
                    txtColor={Colors.vivaMagenta} 
                    text='SAVE CHANGE' 
                    onPress={() => navigation.navigate("MainTabs")} 
                />
            </View>
        </View>
    )
}

export default NotiReminder;