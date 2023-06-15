import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import {React, useState} from 'react';
import color from '../../../../../constants/color';
import FONT_FAMILY from '../../../../../constants/fonts';
import scale from '../../../../../constants/responsive';
import {IMG_Logo} from '../../../../../assets/images';
import SaveButton from '../../../../../components/buttons/Save';
import {LineBottom} from '../../../../../components/footer/images';
import {IC_Rating, IC_Success} from '../../../../../assets/icons';

const OrderSuccess = props => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.introTextBox}>
        <Text style={styles.introText}>ORDER RECEIVED</Text>
        <IC_Success style={styles.icon} />
        <Text style={styles.successText}>Your order was success</Text>
        <Image
          source={LineBottom}
          style={{alignSelf: 'center', marginTop: scale(10)}}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.successText}>Rate your experience!</Text>
        <IC_Rating style={styles.icon} />
        {/* <SaveButton></SaveButton> */}
      </View>
      <View style={styles.totalBorder}>
        <TouchableOpacity style={styles.placeOrder} onPress={() => props.navigation.navigate('HomeScreen')}>
          <Text style={styles.button}>BACK TO HOME</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  introTextBox: {
    alignSelf: 'center',
    marginTop: scale(30),
  },
  introText: {
    color: color.TitleActive,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
    letterSpacing: 4,
    alignSelf: 'center',
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
    marginTop: scale(10),
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
    bottom: 0,
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
  placeOrder: {
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
  icon: {
    alignSelf: 'center',
    marginTop: scale(20),
  },
  successText: {
    color: color.TitleActive,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
    alignSelf: 'center',
    marginTop: scale(10),
  },
});
