import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Button} from 'react-native';
import React from 'react';
import color from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';
import { IMG_Logo } from '../../../../assets/images';
import scale from '../../../../constants/responsive';
import { IC_BackwardArrow, IC_Address, IC_Phone, IC_Email, IC_Password, IC_Edit } from '../../../../assets/icons';
import {Avatar, Title, Caption} from 'react-native-paper';
import { useState } from 'react';
import SaveButton from '../../../../components/buttons/Save';
import { ScrollView } from 'react-native';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

      
const EditMyInfoScreen = props => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [editingPassword, setEditingPassword] = useState(false);
    const [passConfirm, setPassConfirm] = useState(false);
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleEditingPassword = () => {
        setEditingPassword(!editingPassword);
        setPassConfirm('');
      };

    return (
        <ScrollView>
        <SafeAreaView style = {styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.viewIcon} onPress={() => props.navigation.goBack()}>
                    <IC_BackwardArrow/>
                </TouchableOpacity>
               
                <View style={styles.avatar}>
                    <Avatar.Image
                        source={IMG_Logo}
                        size={150}
                    />
                </View>
            </View>
            <View style={styles.body}>
            <View style={styles.inputName}>
                <View style={styles.inputFirstName}>
                    <TextInput
                    onChangeText={firstName => setFirstName(firstName)}
                    placeholder="First name"
                    placeholderTextColor={color.TitleActive}
                    style={styles.inputName1}
                    keyboardType="default"
                    />
                </View>

                <View style={styles.inputLastName}>
                    <TextInput
                    onChangeText={lastName => setLastName(lastName)}
                    placeholder="Last name"
                    placeholderTextColor={color.TitleActive}
                    style={styles.inputName1}
                    keyboardType="default"
                    />
                </View>
                </View>
                {/* mail */}
                <View style={styles.inputBox}>
                    <View style={styles.icon}>
                        <IC_Email />
                        <TextInput
                            onChangeText={mail => setMail(mail)}
                            placeholder="fashionshop@gmail.com"
                            placeholderTextColor={color.TitleActive}
                            style={styles.inputText}
                            keyboardType="default"
                        />
                    </View>
                    
                </View>
                {/* password */}
                <View style={styles.inputBox}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={handleShowPassword}>
                            <IC_Password />
                        </TouchableOpacity>
                        <TextInput
                            secureTextEntry={!showPassword}
                            placeholder="Enter password"
                            value={password}
                            onChangeText={setPassword}
                            style={styles.inputText}
                            keyboardType="default"
                            placeholderTextColor={color.TitleActive}
                        />
                    </View>
                </View>
                    
                <View style={styles.inputBox}>
                    <View style={styles.icon}>
                        <TextInput
                            secureTextEntry={!showPassword}
                            placeholder="Confirm password"
                            value={passConfirm}
                            onChangeText={setPassConfirm}
                            keyboardType="default"
                            placeholderTextColor={color.TitleActive}
                            style={styles.inputPass}
                        />
                    </View>
                </View>
                   
                {/* phone number */}
                <View style={styles.inputBox}>
                    <View style={styles.icon1}>
                        <IC_Phone style={styles.iconPhone}/>
                        <TextInput
                            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                            placeholder="0912345678"
                            placeholderTextColor={color.TitleActive}
                            style={styles.inputText}
                            keyboardType="default"
                        />
                    </View>
                </View>
                {/* address */}
                <View style={styles.inputBox}>
                    <View style={styles.icon1}>
                        <IC_Address />
                        <TextInput
                            onChangeText={address => setAddress(address)}
                            placeholder="KP6, đường Hàn Thuyên, TP.Thủ Đức"
                            placeholderTextColor={color.TitleActive}
                            style={styles.inputText}
                            keyboardType="default"
                        />
                    </View>
                </View>
                <View style={styles.buttonSignIn}>
                    <SaveButton text={'Save Edit'} />
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    );
};

export default EditMyInfoScreen;

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: color.White,
    },
    header: {
        flex: 0.3,
        backgroundColor: color.TitleActive,
      },
    viewIcon: 
    {
        marginLeft: scale(26),
        width: scale(40),
        height: scale(30),
        marginTop: scale(22),
        alignItems: 'center',
    },
    avatar:
    {
        top: scale(50),
        alignSelf: 'center',
    },
    body: {
        flex: 0.7,
        alignItems: 'center',
    },
    icon:
    {
        marginTop: scale(33),
        marginLeft: scale(5),
    },
    edit: {
        marginTop: scale(-35),
        marginLeft: scale(270),
    },
    icon1:
    {
        marginTop: scale(30),
        marginLeft: scale(5),
    },
    button: {
        marginTop: scale(-10),
        marginLeft: scale(150),
    },
    buttonTitle: {
        fontWeight: '400',
        fontSize: scale(12),
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.JoseFinSansRegular,
    },
      inputName: {
        flexDirection: 'row',
        marginTop: scale(80),
        width: scale(295),
        justifyContent: 'space-between',
      },
      inputFirstName: {
        borderBottomWidth: 1,
        width: scale(107),
      },
      inputLastName: {
        borderBottomWidth: 1,
        width: scale(180),
      },
      inputBox: {
        marginTop: scale(10),
        width: scale(295),
        height: scale(51),
        borderColor: color.GraySolid,
        borderBottomWidth: 1,
      },
      inputName1: {
        color: color.TitleActive,
        fontSize: 16,
        marginLeft: scale(5),
      },
      inputText: {
        color: color.TitleActive,
        fontSize: 16,
        top: scale(-15),
        marginLeft: scale(25),
      },
      inputPass: {
        color: color.TitleActive,
        fontSize: 16,
        top: scale(-5),
        marginLeft: scale(25),
      },
      inputText2: {
        color: color.TitleActive,
        fontSize: 16,
        top: scale(-17),
        marginLeft: scale(25),
      },
    buttonSignIn: {
        marginTop: scale(61),
      },
});
