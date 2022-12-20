import { StyleSheet } from "react-native";

import Attributes from "../../../constants/Attributes";

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F8E9ED',
        width: 414,
        height: 852,
        flex: 1
    },
    userName: 
    {
        position: 'relative',
        fontSize: 25,
        top: 170,
        fontFamily: Attributes.PoppinsBold,
        textAlign: 'center',
        color: '#BB2649'
    },

    nickname: {
        position: 'relative',
        fontSize: 15,
        top: 160,
        font: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000'
    },

    ava_picture:
    {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        marginLeft: 155
    },

    exercise_text: {
        fontSize: 15,
        color: '#BB2649',
        marginLeft: 15
    },

    name_wrapper: {
        position: 'relative',
        width: 360,
        height: 55,
        marginTop: 100,
        marginLeft: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 5
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
        backgroundColor: "#FCF2F4",
        padding: 10,
        width: 356,
        height: 55,
        marginLeft: 30,
        marginTop: 200
      },

    signout: {
          position: 'relative',
          fontFamily: Attributes.PoppinsBold,
          fontSize: Attributes.regularFont,
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
        color: '#BB2649'
    },
});

export default styles;