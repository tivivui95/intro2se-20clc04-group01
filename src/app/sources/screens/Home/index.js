import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source='/assets/logo.png' alt='logo' />
            <Text>Home</Text>
        </View>
    )
}

export default Home;