import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Color from '../../../constants/color';
import FONT_FAMILY from '../../../constants/fonts';
import { IMG_Logo } from '../../../assets/images';
import scale from '../../../constants/responsive';
import { IC_BackwardArrow } from '../../../assets/icons';

const OnboardingScreen = props => {
    return (
        <SafeAreaView style = {styles.container}>
            <TouchableOpacity style={styles.viewIcon}>
                <IC_BackwardArrow/>
            </TouchableOpacity>
            <View style = {styles.logoBorder}>
                <Image source = {IMG_Logo} style = {styles.logo}/>
            </View>
            <View style={styles.introBorder}>
                <Text style={styles.introText1}>Welcome</Text>
                <Text numberOfLines={2} style={styles.introText2}>Choose one option to update the latest fashion trends</Text>
            </View>
            <View style = {styles.signinButton1}>
                <TouchableOpacity style = {styles.signinButtonPosition}>
                    <View style = {styles.signinButton}> 
                        <Text style={styles.signinButtonText}>Sign In</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {styles.signupButton1}>
                <TouchableOpacity style = {styles.signupButtonPosition}>
                    <View style = {styles.signupButton}> 
                        <Text style={styles.signupButtonText}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: Color.Background,
    },
    viewIcon: 
    {
        backgroundColor: Color.Background,
        marginLeft: scale(26),
        width: scale(40),
        height: scale(30),
        marginTop: scale(22),
        alignItems: 'center',
    },
    logoBorder:
    {
        alignSelf: 'center',
    },
    logo:
    {
        width: scale(293),
        height: scale(279),
    },
    introBorder:
    {
        alignSelf: 'center',
        width: scale(254),
        height: scale(70),
    },
    introText1:
    {
        color: Color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(36),
        lineHeight: scale(40),
        alignSelf: 'center',
    },
    introText2:
    {
        color: Color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(18),
        lineHeight: scale(20),
        alignSelf: 'center',
        textAlignVertical: "center",
        textAlign: "center",
    },
    signinButton1:
    {
        alignSelf: 'center',
    },
    signinButtonPosition:
    {
        position: 'absolute',
        marginTop: scale(75),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    signinButton:
    {
        justifyContent: 'center',
        borderWidth: scale(1),
        width: scale(301),
        height: scale(61),
    },
    signinButtonText:
    {
        color: Color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(24),
        lineHeight: scale(26),
        alignSelf: 'center',
    },
    signupButton1:
    {
        alignSelf: 'center',
    },
    signupButtonPosition:
    {
        position: 'absolute',
        marginTop: scale(150),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    signupButton:
    {
        justifyContent: 'center',
        borderWidth: scale(1),
        width: scale(301),
        height: scale(61),
        backgroundColor: Color.TitleActive,
    },
    signupButtonText:
    {
        color: Color.OffWhite,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(24),
        lineHeight: scale(26),
        alignSelf: 'center',
    },
});