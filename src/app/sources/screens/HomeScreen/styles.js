import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Attributes from "../../../constants/Attributes";

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.lightPink
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
    ex_today: {
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        height: 180
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
        borderRadius: 6,
        height: 36,
        marginVertical: 16,
        paddingHorizontal: 15,
        fontFamily: Attributes.QuicksandMedium,
        backgroundColor: Colors.defaultWhite
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