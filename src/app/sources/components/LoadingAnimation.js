import { Wander, Pulse, Bounce, Plane, Wave, Flow, Chase, Swing, Circle, CircleFade, Grid, Fold } from 'react-native-animated-spinkit';
import { View } from 'react-native';
import LogoImage from './Logo';
import Colors from '../../constants/Colors';

const BounceLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <Bounce size={72} color={Colors.vivaMagenta} style={{alignSelf: 'center', position: 'absolute'}} />
        <LogoImage pulse={true} color='slp' center={true} />
    </View>
    );
}

const PulseLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <Pulse size={72} color={Colors.vivaMagenta} style={{alignSelf: 'center', position: 'absolute'}} />
        <LogoImage pulse={true} color='slp' center={true} />
    </View>
    );
}

const ChaseLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <Chase size={72} color={Colors.vivaMagenta} style={{alignSelf: 'center', position: 'absolute'}} />
        <LogoImage pulse={true} color='sp' center={true} />
    </View>
    );
}

const WanderLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <Wander size={82} color={Colors.vivaMagenta} style={{alignSelf: 'center', position: 'absolute'}} />
        <LogoImage pulse={true} color='sp' center={true} />
    </View>
    );
}

const PlaneLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <Plane size={84} color={Colors.softBlue} style={{alignSelf: 'center', position: 'absolute'}} />
        <LogoImage pulse={true} color='slp' center={true} />
    </View>
    );
}

const WaveLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <LogoImage pulse={true} color='p' center={true} />
        <Wave size={36} color={Colors.vivaMagenta} style={{alignSelf: 'center'}} />
    </View>
    );
}

const FlowLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <LogoImage pulse={true} color='p' center={true} />
        <Flow size={36} color={Colors.vivaMagenta} style={{alignSelf: 'center'}} />
    </View>
    );
}

const SwingLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <Swing size={84} color={Colors.softGreen} style={{alignSelf: 'center', position: 'absolute'}} />
        <LogoImage pulse={true} color='sp' center={true} />
    </View>
    );
}

const CircleLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <Circle size={84} color={Colors.vivaMagenta} style={{alignSelf: 'center', position: 'absolute'}} />
        <LogoImage pulse={true} color='sp' center={true} />
    </View>
    );
}

const CircleFadeLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <CircleFade size={84} color={Colors.vivaMagenta} style={{alignSelf: 'center', position: 'absolute'}} />
        <LogoImage pulse={true} color='sp' center={true} />
    </View>
    );
}

const GridLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <Grid size={84} color={Colors.vivaMagenta} style={{alignSelf: 'center', position: 'absolute'}} />
        <LogoImage pulse={true} color='slp' center={true} />
    </View>
    );
}

const FoldLogo = () => {
    return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent:'center' }}>
        <Fold size={84} color={Colors.softBlue} style={{alignSelf: 'center', position: 'absolute'}} />
        <LogoImage pulse={true} color='slp' center={true} />
    </View>
    );
}

const LoadingAnimation = ({color}) => {
  return (
    <>
        {
        color==1 ?
        <PlaneLogo />
        : color==2 ?
        <ChaseLogo />
        : color==3 ?
        <BounceLogo />
        : color==4 ?
        <WaveLogo />
        : color==5 ?
        <PulseLogo />
        : color==6 ?
        <FlowLogo />
        : color==7 ?
        <SwingLogo />
        : color==8 ?
        <CircleLogo />
        : color==9 ?
        <CircleFadeLogo />
        : color==10 ?
        <GridLogo />
        : color==0 ?
        <FoldLogo />
        : 
        <WanderLogo />
        }
    </>
  )
}

export default LoadingAnimation;