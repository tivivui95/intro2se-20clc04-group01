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
        textAlign: 'center'
    },

    nickname: {
        position: 'relative',
        fontSize: 15,
        top: 130,
        font: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center'
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
    search_wrapper: {
        position: 'relative',
        width: 300,
        height: 50,
        marginTop: 300,
        marginLeft: 30,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        elevation: 5
    },
    title_exercise: {
        position: 'relative',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginTop:10,
        marginBottom: 150,
        marginLeft: 32
    }, 
    name_exercise: {
        position: 'relative',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    exercise_text: {
        fontSize: 15,
        color: 'white',
        marginLeft: 32
    },
    exercise_wrapper: {
        position: 'relative',
        width: 275,
        height: 80,
        marginLeft: 32,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 5
    },
});

export default styles;