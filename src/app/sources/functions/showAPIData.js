import React from "react";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { WebView } from 'react-native-webview';

const ShowAPI = () => {

    const [ data, changeData ] = useState("");

    const getAPI = async () => {
        try {
         const response = await fetch('https://c651-2001-ee0-4f81-13b0-bc17-7eb1-2fe4-ac7b.ap.ngrok.io/ex/3');
         const data_2 = await response.json();
         console.log(data_2);
         changeData(data_2);
       } catch (error) {
         console.error(error);
       } finally {
       }
     }
// { "ex": []}
    useEffect(() => {
        // Run! Like go get some data from an API.
        getAPI();
      }, []);

    return (
        <View style={{ flex: 1}}>
            <Text style={{ fontSize: 24, alignSelf: 'center' }}>Bài tập {data.name}</Text>
            <Text>{data.descrip}</Text>
            <View style={{ flex: 1, height: 200 }}>
                <WebView
                source={{uri: "https://youtube.com/embed/" + data.video}}
                startInLoadingState={true}
                scalesPageToFit={true} />
            </View>
        </View>
        
        );
}

export default ShowAPI;