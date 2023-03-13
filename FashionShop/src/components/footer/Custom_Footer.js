import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, Alert } from 'react-native'
import React from 'react'
import {IC_Twitter, IC_Instagram, IC_Youtube} from './icons'
import {LineTop, LineBottom} from './images'
import Color from '../../constants/color'
import fontStyles from '../../constants/fontStyle'
import scale from '../../constants/responsive'
import FONT_FAMILY from '../../constants/fonts'

const url_Twitter = "https://twitter.com/i/flow/login";
const url_Instagram = "https://www.instagram.com/?hl=en";
const url_Youtube = "https://www.youtube.com/";

const Custom_Footer = () => {

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if(isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert('Do not know how to open this url: ${url}');
        }
    }

  return (
    <View style={styles.container}>
        {/* Icon */}
        <View style={styles.iconContainer}>
            {/* Twitter */}
            <TouchableOpacity onPress={() => {openUrl(url_Twitter)}}>
                <IC_Twitter/>
            </TouchableOpacity>
            {/* Instagram */}
            <TouchableOpacity style={{marginLeft: scale(49)}} onPress={() => {openUrl(url_Instagram)}}>
                <IC_Instagram/>
            </TouchableOpacity>
            {/* Youtube */}
            <TouchableOpacity style={{marginLeft: scale(49)}} onPress={() => {openUrl(url_Youtube)}}>
                <IC_Youtube/>
            </TouchableOpacity>
        </View>
        {/* Line Top */}
        <Image source={LineTop} style={styles.lineTop}/>
        {/* Body Text */}
        <View style={styles.bodyTextContainer}>
            <Text style={styles.bodyText}>{'support@openui.design\n+60 825 876\n08:00 - 22:00 - Everyday'}</Text>
        </View>
        {/* Line Bottom */}
        <Image source={LineBottom} style={styles.lineBottom}/>
        <>
        <View style={styles.buttonContainer}>
            {/* About Button */}
            <TouchableOpacity >
                <Text style={styles.aboutText}>About</Text>
            </TouchableOpacity>
            {/* Contact Button */}
            <TouchableOpacity style={{marginLeft: scale(52)}}>
                <Text style={styles.contactText}>Contact</Text>
            </TouchableOpacity>
            {/* Blog Button */}
            <TouchableOpacity style={{marginLeft: scale(52)}}>
                <Text style={styles.blogText}>Blog</Text>
            </TouchableOpacity>
        </View>
        </>
        {/* Label */}
        <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Copyright© OpenUI All Rights Reserved.</Text>
        </View>
    </View>
  )
}

export default Custom_Footer

const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.White,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: scale(20),
    },
    iconContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    lineTop:{
        alignSelf: 'center',
        marginTop: scale(24),
    },
    bodyTextContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop: scale(19),
    },
    bodyText:{
        fontWeight: '400',
        fontSize: scale(16),
        lineHeight: scale(29),
        textAlign: 'center',
        fontFamily: FONT_FAMILY.JoseFinSansRegular,
        color: Color.MineShaft,
    },
    lineBottom:{
        alignSelf: 'center',
        marginTop: scale(19),
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop: scale(32),
    },
    aboutText:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: Color.Black,
    },
    contactText:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: Color.Black,
    },
    blogText:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: Color.Black,
    },
    labelContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.Silver,
        width: '100%',
        opacity: 0.17,
        marginTop: scale(23),
    },
    labelText:{
        paddingVertical: scale(12),
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 19,
        textAlign: 'center',
        color: Color.Emperor,
        opacity: 1,
    },
})