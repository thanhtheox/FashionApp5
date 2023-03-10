import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import color from '../../../constants/color';
import FONT_FAMILY from '../../../constants/fonts';
import {IC_BackwardArrow} from '../../../assets/icons';
import scale from '../../../constants/responsive';
import SaveButton from '../../../components/buttons/Save';

const SignInScreen = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.viewIcon}>
          <IC_BackwardArrow stroke={color.White} />
        </TouchableOpacity>

        <View style={styles.ViewTitleText}>
          <Text style={styles.textTile}>Welcome!</Text>
          <Text style={styles.textLabel}>Sign in to continue</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.inputMailBox}>
          <TextInput
            onChangeText={email => setMail(email)}
            placeholder="Email"
            placeholderTextColor={color.GraySolid}
            style={styles.inputText}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputMailBox}>
          <TextInput
            onChangeText={pass => setPass(pass)}
            placeholder="Password"
            placeholderTextColor={color.GraySolid}
            style={styles.inputText}
            keyboardType="visible-password"
          />
        </View>

        <View style={styles.buttonSignIn}>
          <SaveButton text={'Sign In'} />
        </View>

        <TouchableOpacity style={styles.ViewForgotText}>
          <Text style={styles.textForgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    backgroundColor: color.TitleActive,
  },
  viewIcon: {
    marginLeft: scale(30),
    width: scale(40),
    height: scale(30),
    marginTop: scale(23),
    alignItems: 'center',
  },
  ViewTitleText: {
    marginTop: scale(10),
    marginLeft: scale(30),
  },
  textTile: {
    color: color.White,
    fontSize: 36,
    fontFamily: FONT_FAMILY.JoseFinSans,
    fontWeight: 700,
  },
  textLabel: {
    color: color.White,
    fontSize: 18,
    fontFamily: FONT_FAMILY.JoseFinSans,
    fontWeight: 500,
  },
  body: {
    flex: 0.7,
    backgroundColor: color.White,
    alignItems: 'center',
  },
  inputMailBox: {
    marginTop: scale(10),
    width: scale(295),
    height: scale(51),
    borderColor: color.GraySolid,
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
  },
  inputText: {
    color: color.TitleActive,
    fontSize: 16,
    marginLeft: scale(5),
  },
  buttonSignIn: {
    marginTop: scale(61),
  },
  ViewForgotText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(21),
  },
  textForgot: {
    color: color.RedSolid,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.JoseFinSans,
  },
});
