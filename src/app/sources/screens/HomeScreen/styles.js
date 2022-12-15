import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Attributes from "../../../constants/Attributes";

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.lightPink,
        flex: 1
    },
    top_contain: {
        marginHorizontal: 32,
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sayHello: {
        fontSize: Attributes.smallFont,
        fontFamily: Attributes.Poppins,
    },
    name: {
        color: Colors.vivaMagenta,
        fontFamily: Attributes.PoppinsSemiBold
    },
    title: {
        color: Colors.vivaMagenta,
        fontSize: Attributes.largeFont,
        fontFamily: Attributes.PoppinsSemiBold,
        lineHeight: Attributes.largeFont
    },
    ava_picture:
    {
        resizeMode: 'contain',
    },
    plan_picture:
    {
        position: 'relative',
        borderRadius: 10,
        marginHorizontal: 25
    },
    text_input: {
        borderColor: 'black',
        borderRadius: 6,
        height: 36,
        marginHorizontal: 32,
        marginVertical: 16,
        paddingHorizontal: 15,
        fontFamily: Attributes.QuicksandMedium,
        backgroundColor: 'white'
    },
    title_text: {
        
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
        color: '#FFFFFF',
        marginLeft: 32
    },
    exercise_wrapper: {
        position: 'relative',
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