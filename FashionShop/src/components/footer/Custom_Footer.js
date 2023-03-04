import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, Alert } from 'react-native'
import React from 'react'
import {IC_Twitter, IC_Instagram, IC_Youtube} from './icons'
import {LineTop, LineBottom} from './images'
import Color from '../../constants/color'
import fontStyles from '../../constants/fontStyle'

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
            <TouchableOpacity style={styles.twitterIcon} onPress={() => {openUrl(url_Twitter)}}>
                <IC_Twitter/>
            </TouchableOpacity>
            {/* Instagram */}
            <TouchableOpacity style={styles.instagramIcon} onPress={() => {openUrl(url_Instagram)}}>
                <IC_Instagram/>
            </TouchableOpacity>
            {/* Youtube */}
            <TouchableOpacity style={styles.youtubeIcon} onPress={() => {openUrl(url_Youtube)}}>
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
            {/* About Button */}
            <TouchableOpacity style={styles.aboutButton}>
                <Text style={styles.aboutText}>About</Text>
            </TouchableOpacity>
            {/* Contact Button */}
            <TouchableOpacity style={styles.contactButton}>
                <Text style={styles.contactText}>Contact</Text>
            </TouchableOpacity>
            {/* Blog Button */}
            <TouchableOpacity style={styles.blogButton}>
                <Text style={styles.blogText}>Blog</Text>
            </TouchableOpacity>
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
        position: 'absolute',
        width: 375,
        height: 340,
        backgroundColor: Color.White,
    },
    iconContainer:{
        position: 'absolute',
        left: 106.5,
        top: 23.78,
        width: 162,
        height: 24,
    },
    twitterIcon:{
        position: 'absolute',
        left: 1.6,
        top: 3.55,
    },
    instagramIcon:{
        position: 'absolute',
        left: 71.4,
        top: 2.4,
    },
    youtubeIcon:{
        position: 'absolute',
        left: 139.6,
        top: 3.2,
    },
    lineTop:{
        position: 'absolute',
        left: 125.02,
        top: 71.78,
    },
    bodyTextContainer:{
        position: 'absolute',
        width: 184,
        height: 116,
        left: 95,
        top: 99.97,
    },
    bodyText:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 29,
        textAlign: 'center',
        color: Color.MineShaft,
    },
    lineBottom:{
        position: 'absolute',
        left: 125.02,
        top: 206.53,
    },
    aboutButton:{
        position: 'absolute',
        left: 58,
        top: 247.78,
    },
    aboutText:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: Color.Black,
    },
    contactButton:{
        position: 'absolute',
        left: 157,
        top: 247.78,
    },
    contactText:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: Color.Black,
    },
    blogButton:{
        position: 'absolute',
        left: 270,
        top: 247.78,
    },
    blogText:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: Color.Black,
    },
    labelContainer:{
        position:'absolute',
        width: 375,
        height: 45.25,
        top: 294.75,
        backgroundColor: Color.Silver,
        opacity: 0.17,
    },
    labelText:{
        position: 'absolute',
        left: 68.5,
        top: 11.07,
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 19,
        textAlign: 'center',
        color: Color.Emperor,
        opacity: 1,
    },
})