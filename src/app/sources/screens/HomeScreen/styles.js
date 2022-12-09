import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F8E9ED',
        width: 414,
        height: 852,
        flex: 1
    },
    sayHello: {
        position: 'relative',
        fontSize: 20,
        top: 46,
        marginLeft: 32
    },
    name: {
        position: 'relative',
        fontSize: 20,
        color: '#BB2649',
    },
    title: {
        position: 'relative',
        color: '#BB2649',
        fontSize: 25,
        fontWeight: "bold",
        paddingLeft: 32,
    },
    ava_picture:
    {
        position: 'relative',
        resizeMode: 'contain',
        top: 25,
        left: 334
    },
    plan_picture:
    {
        position: 'relative',
        marginHorizontal: 25
    },
    search_wrapper: {
        position: 'relative',
        width: 300,
        height: 50,
        marginTop: 10,
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
    exercise_wrapper: {

    }
});

export default styles;