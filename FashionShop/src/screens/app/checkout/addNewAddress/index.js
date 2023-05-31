import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import {React, useState} from 'react';
import color from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';
import scale from '../../../../constants/responsive';
import { IMG_Logo } from '../../../../assets/images';
import SaveButton from '../../../../components/buttons/Save';
import { LineBottom } from '../../../../components/footer/images';

const AddNewAddressScreen = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [code, setCode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

    return (
        <SafeAreaView style = {styles.container}>
            <View style={styles.introTextBox}>
                <Text style={styles.introText}>ADD SHIPPING ADDRESS</Text>
                <Image source={LineBottom} style={{alignSelf: 'center'}}/>
            </View>
            <View style={styles.body}>
                <View style={styles.inputName}>
                <View style={styles.inputFirstName}>
                    <TextInput
                    onChangeText={firstName => setFirstName(firstName)}
                    placeholder="First name"
                    placeholderTextColor={color.GraySolid}
                    style={styles.inputText}
                    keyboardType="default"
                    />
                </View>

                <View style={styles.inputLastName}>
                    <TextInput
                    onChangeText={lastName => setLastName(lastName)}
                    placeholder="Last name"
                    placeholderTextColor={color.GraySolid}
                    style={styles.inputText}
                    keyboardType="default"
                    />
                </View>
                </View>

                <View style={styles.inputMailBox}>
                <TextInput
                    onChangeText={address => setAddress(address)}
                    placeholder="Address"
                    placeholderTextColor={color.GraySolid}
                    style={styles.inputText}
                    keyboardType="default"
                />
                </View>

                <View style={styles.inputMailBox}>
                <TextInput
                    onChangeText={city => setCity(city)}
                    placeholder="City"
                    placeholderTextColor={color.GraySolid}
                    style={styles.inputText}
                    keyboardType="default"
                />
                </View>
                <View style={styles.inputCode}>
                <View style={styles.inputState}>
                    <TextInput
                    onChangeText={state => setState(state)}
                    placeholder="State"
                    placeholderTextColor={color.GraySolid}
                    style={styles.inputText}
                    keyboardType="default"
                    />
                </View>

                <View style={styles.inputZipCode}>
                    <TextInput
                    onChangeText={code => setCode(code)}
                    placeholder="ZIP Code"
                    placeholderTextColor={color.GraySolid}
                    style={styles.inputText}
                    keyboardType="number-pad"
                    />
                </View>
                </View>
                <View style={styles.inputMailBox}>
                    <TextInput
                        onChangeText={phone => setPhone(phone)}
                        placeholder="Phone Number"
                        placeholderTextColor={color.GraySolid}
                        style={styles.inputText}
                        keyboardType="number-pad"
                    />
                </View>        
            </View>
            <View style={styles.totalBorder}>
            
            <TouchableOpacity style={styles.placeOrder}>
              <Text style={styles.button}>ADD NOW</Text>
            </TouchableOpacity>
          </View>  
        </SafeAreaView>
    );
};

export default AddNewAddressScreen;

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: color.White,
    },
    introTextBox:{
        alignSelf: 'center',
        marginTop: scale(30),
    },
    introText: {
        color: color.TitleActive,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
        letterSpacing: 4,
    },
    body: {
        marginTop: scale(30),
        backgroundColor: color.White,
        alignItems: 'center',
      },
      viewInput: {
        marginTop: scale(10),
        width: scale(295),
        height: scale(51),
        borderColor: color.GraySolid,
      },
      inputName: {
        flexDirection: 'row',
        marginTop: scale(10),
        width: scale(339),
        height: scale(51),
        justifyContent: 'space-between',
      },
      inputFirstName: {
        borderBottomWidth: 1,
        width: scale(130),
        height: scale(51),
        borderColor: color.GraySolid,
      },
      inputLastName: {
        borderBottomWidth: 1,
        width: scale(190),
        height: scale(51),
        borderColor: color.GraySolid,
      },
      inputCode: {
        flexDirection: 'row',
        marginTop: scale(10),
        width: scale(339),
        height: scale(51),
        justifyContent: 'space-between',
      },
      inputState: {
        borderBottomWidth: 1,
        width: scale(130),
        height: scale(51),
        borderColor: color.GraySolid,
      },
      inputZipCode: {
        borderBottomWidth: 1,
        width: scale(190),
        height: scale(51),
        borderColor: color.GraySolid,
      },
      inputMailBox: {
        marginTop: scale(10),
        width: scale(339),
        height: scale(51),
        borderColor: color.GraySolid,
        borderBottomWidth: 1,
      },
      inputText: {
        color: color.TitleActive,
        fontSize: scale(16),
        marginLeft: scale(5),
        marginTop:scale(10)
      },
      textFailed: {
        alignSelf: 'flex-start',
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(12),
        color: color.RedSolid,
        marginTop: scale(5),
      },
      totalBorder: {
        
        position: 'absolute',
        justifyContent: 'flex-end',
        bottom: 0
      },
      total: {
        color: color.TitleActive,
        fontSize: 16,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
    },
    price: {
        marginTop: scale(-13),
        alignSelf: 'flex-end',
        color: color.Primary,
        fontSize: 16,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
    },
    placeOrder:{
        marginTop: scale(20),
        width: scale(375),
        height: scale(56),
        backgroundColor: color.TitleActive,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    button: {
        color: color.White,
        fontSize: 16,
        fontWeight: 400,
        fontFamily: FONT_FAMILY.Regular,
        alignSelf: 'center',
    },
});