import { StyleSheet } from "react-native";

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
        fontSize: 22,
        top: 130,
        font: 'Poppins',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#BB2649'
    },

    nickname: {
        position: 'relative',
        fontSize: 15,
        top: 130,
        font: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000'
    },

    ava_picture:
    {
        position: 'relative',
        resizeMode: 'stretch',
        marginTop: 20,
        marginLeft: 190,

    },
    plan_picture: {
        position: 'relative',
        borderRadius: 10,
        marginHorizontal: 25
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
        marginTop: 350
      },

      signout: 
      {
          position: 'relative',
          fontSize: 22,
          font: 'Poppins',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#BB2649'
      },
});

export default styles;