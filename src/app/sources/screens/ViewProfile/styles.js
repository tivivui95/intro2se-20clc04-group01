import { StyleSheet } from "react-native";

import Attributes from "../../../constants/Attributes";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F8E9ED',
        alignItems: 'center',
        flex: 1
    },
    userName: 
    {
        fontSize: 26,
        fontFamily: Attributes.PoppinsBold,
        textAlign: 'center',
        color: '#BB2649',
        marginTop: 12,
    },

    nickname: {
        position: 'relative',
        fontSize: 20,
        font: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000'
    },

    ava_picture:
    {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 45
    },

    exercise_text: {
        fontSize: 15,
        color: '#BB2649',
        margin: 12,
    },

    text_wrapper: {
        width: 356,
        height: 55,
        marginTop: 12,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 5,
        paddingHorizontal: 12
    },

    gender_wrapper: {
        position: 'relative',
        width: 360,
        height: 55,
        marginTop: 30,
        marginLeft: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 5
    },

    height_wrapper: {
        position: 'relative',
        width: 360,
        height: 55,
        marginTop: 30,
        marginLeft: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 5
    },

    weight_wrapper: {
        position: 'relative',
        width: 360,
        height: 55,
        marginTop: 30,
        marginLeft: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 5
    },

    button: {
        alignItems: "center",
        width: 356,
        height: 55,
        backgroundColor: Colors.defaultWhite,
        borderRadius: 15,
        justifyContent: 'center',
        margin: 6,
      },
      button_small: {
        alignItems: "center",
        width: 170,
        height: 55,
        backgroundColor: Colors.defaultWhite,
        borderRadius: 15,
        justifyContent: 'center',
        margin: 6,
        padding: 6
      },
    signout: {
          position: 'relative',
          fontFamily: Attributes.PoppinsSemiBold,
          fontSize: Attributes.smallFont,
          textAlign: 'center',
          color: '#BB2649'
      },
    buttonchange: {
        alignItems: "center",
        backgroundColor: "#FCF2F4",
        marginLeft: 30,
        width: 356,
        height: 55,
        marginTop: 10,
        padding: 10,
    },
    changePassword: {
        position: 'relative',
        fontFamily: Attributes.PoppinsBold,
        fontSize: Attributes.regularFont,
        textAlign: 'center',
        color: Colors.softGreen
    },
});

export default styles;