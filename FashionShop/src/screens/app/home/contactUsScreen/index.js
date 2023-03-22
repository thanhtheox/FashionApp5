import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    Icon
  } from 'react-native';
  import React, {useState} from 'react';
  import Custom_Header from '../../../../components/header/Custom_Header';
  import Custom_Footer from '../../../../components/footer/Custom_Footer';
  import color from '../../../../constants/color';
  import FONT_FAMILY from '../../../../constants/fonts';
  import scale from '../../../../constants/responsive';
  import { LineBottom } from '../../../../components/footer/images';
  import SaveButton from '../../../../components/buttons/Save';
  import { IC_ContactCall, IC_ContactText } from '../../../../assets/icons';
  const ContactUsScreen = () => {  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <Custom_Header/>
        <View style={styles.introTextBox}>
            <Text style={styles.introText}>CONTACT US</Text>
            <Image source={LineBottom}/>
        </View>
        <View style={styles.bodyTextBox}>
            <IC_ContactCall style={styles.call}/>
            <Text numberOfLines={3} style={styles.bodyText}>     Need an ASAP answer? Contact us via phone, from 8:00 to 18:00, everyday! We are always ready to serve you.</Text>
            <TouchableOpacity style = {styles.CallButtonPosition}>
                <View style = {styles.CallButton}> 
                    <Text style={styles.buttonCall}>CALL US</Text>
                </View>
            </TouchableOpacity>
            <IC_ContactText style={styles.text}/>
            <Text numberOfLines={9} style={styles.bodyText1}>     You can text us at 0912345678 – or click on the “text us” link below on your mobile device. Please allow the system to acknowledge a simple greeting before providing your question/order details. Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available via all carriers.</Text>
            <TouchableOpacity style = {styles.TextButtonPosition}>
                <View style = {styles.TextButton}> 
                    <Text style={styles.buttonText}>TEXT US</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View  style={styles.footer}>
            <Custom_Footer/>
        </View>
        
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ContactUsScreen;
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.White,
    },
    introTextBox:{
        alignSelf: 'center',
        marginTop: scale(10),
    },
    introText: {
        color: color.TitleActive,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
        letterSpacing: 4,
    },
    bodyTextBox: {
      alignSelf: 'center',
      marginTop: scale(10),
      width: scale(345),
      height: scale(246),
    },
    bodyText: {
        marginTop: scale(10),
        color: color.TitleActive,
        fontSize: 16,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
    },
    bodyText1: {
        marginTop: scale(15),
        color: color.TitleActive,
        fontSize: 16,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
    },
    call:{
        alignSelf: 'center',
        marginTop: scale(20),
    },
    CallButtonPosition:
    {
        position: 'absolute',
        marginTop: scale(130),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    CallButton:
    {
        justifyContent: 'center',
        borderWidth: scale(1),
        width: scale(130),
        height: scale(40),
        backgroundColor: color.TitleActive,
    },
    buttonCall: {
        color: color.White,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(16),
        fontWeight: 400,
        alignSelf: 'center',
    },
    text:{
        alignSelf: 'center',
        marginTop: scale(120),
    },
    buttonText: {
        color: color.White,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(16),
        fontWeight: 400,
        alignSelf: 'center',
    },
    TextButtonPosition:
    {
        position: 'absolute',
        marginTop: scale(400),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    TextButton:
    {
        justifyContent: 'center',
        borderWidth: scale(1),
        width: scale(130),
        height: scale(40),
        backgroundColor: color.TitleActive,
    },
   
    footer: {
        paddingTop: scale(300),
    },
  });
  