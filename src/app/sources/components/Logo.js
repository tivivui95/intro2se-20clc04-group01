import React from 'react';
import { View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const LogoImage = ({ center, color, pulse }) => {
    return (
        <Animatable.View animation={pulse==true ? 'pulse' : ''} iterationCount='infinite' iterationDelay={1000}>
        {color == 'w' ? 
        <Image 
            style={center ? {alignSelf: 'center'}: {}}
            source={require('../../assets/images/logo-w.png')} 
            alt='logo' 
        /> 
        : color =='p' ?
        <Image style={center ? {alignSelf: 'center'}: {}}
        source={require('../../assets/images/logo-p.png')} 
        alt='logo' 
        />
        : color =='lp' ?
        <Image style={center ? {alignSelf: 'center'}: {}}
        source={require('../../assets/images/logo-lp.png')} 
        alt='logo' 
        /> 
        : color =='sw' ? 
        <Image 
            style={center ? {alignSelf: 'center', width: 42, height: 42}: {width: 42, height: 42}}
            source={require('../../assets/images/logo-w.png')} 
            alt='logo' 
        /> 
        : color =='slp' ? 
        <Image 
            style={center ? {alignSelf: 'center', width: 42, height: 42}: {width: 42, height: 42}}
            source={require('../../assets/images/logo-lp.png')} 
            alt='logo' 
        /> 
        :
        <Image 
            style={center ? {alignSelf: 'center', width: 42, height: 42}: {width: 42, height: 42}}
            source={require('../../assets/images/logo-p.png')} 
            alt='logo' 
        /> 
        }
        </Animatable.View>
    );
}

export default LogoImage;