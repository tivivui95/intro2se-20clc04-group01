import React, { useState } from "react";
import { View, Text } from "react-native";
import { useRef } from "react";
import { Picker, DatePicker } from 'react-native-wheel-pick';

export default OrderPizza = () => {
  const initialValues = [{ id: "pizza", value: 3 }];
  const [selectedLanguage, setSelectedLanguage] = useState();

return (<View>
    <Picker
  style={{ backgroundColor: 'white', width: 300, height: 215 }}
  selectedValue='item4'
  pickerData={[...Array(150 - 10 + 1).keys()].map(x => x + 10)}
  onValueChange={value => { console.log(value) }}
/>
</View>)


};