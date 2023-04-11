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
// import * as yup from 'yup';
// import {Controller, useForm} from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers/yup';

// const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// const signUpPayloadSchema = yup.object({
//   firstName: yup.string()
//   .max(30,'Họ tên không hợp lệ')
//   .required('Họ tên không được để trống'),
//   lastName: yup.string()
//   .max(30,'Họ tên không hợp lệ')
//   .required('Họ tên không được để trống'),
//   email: yup
//     .string()
//     .email('Email không hợp lệ')
//     .max(30, 'Độ dài email phải nhỏ hơn 30 kí tự')
//     .required('Email không được để trống'),
//   password: yup
//     .string()
//     .matches(passwordRegex,'Mật khẩu phải chứa ký tự hoa, thường và số')
//     .min(8, 'Độ dài mật khẩu phải lớn hơn 8')
//     .max(16, 'Độ dài mật khẩu phải nhỏ hơn 16')
//     .required('Mật khẩu không được để trống'),
//   passConfirm: yup
//   .string()
//   .oneOf([Yup.ref('password'), null], 'Passwords must match')
// });

const SignUpScreen = (props) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  //data

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.viewIcon} onPress={() => props.navigation.goBack()}>
          <IC_BackwardArrow stroke={color.White} />
        </TouchableOpacity>

        <View style={styles.ViewTitleText}>
          <Text style={styles.textTile}>Welcome!</Text>
          <Text style={styles.textLabel}>Sign in to continue</Text>
        </View>
      </View>

      <View style={styles.body}>
        {/* <View style={styles.viewInput}> */}
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

        <View style={styles.inputMailBox}>
          <TextInput
            onChangeText={passConfirm => setPassConfirm(passConfirm)}
            placeholder="Confirm password"
            placeholderTextColor={color.GraySolid}
            style={styles.inputText}
            keyboardType="visible-password"
          />
        </View>

        <View style={styles.buttonSignIn}>
          <SaveButton text={'Sign Up'} onPress={() => props.navigation.navigate('OTPScreen')}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
  viewInput: {
    marginTop: scale(10),
    width: scale(295),
    height: scale(51),
    borderColor: color.GraySolid,
    // borderBottomWidth: 1,
  },
  inputName: {
    flexDirection: 'row',
    marginTop: scale(10),
    width: scale(295),
    height: scale(51),
    justifyContent: 'space-between',
  },
  inputFirstName: {
    borderBottomWidth: 1,
    width: scale(107),
    height: scale(51),
  },
  inputLastName: {
    borderBottomWidth: 1,
    width: scale(180),
    height: scale(51),
  },
  inputMailBox: {
    marginTop: scale(10),
    width: scale(295),
    height: scale(51),
    borderColor: color.GraySolid,
    borderBottomWidth: 1,
  },
  inputText: {
    color: color.TitleActive,
    fontSize: 16,
    top: scale(15),
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
  textFailed: {
    alignSelf: 'flex-start',
    fontFamily: FONT_FAMILY.JoseFinSans,
    fontSize: scale(12),
    color: color.RedSolid,
    marginTop: scale(5),
  },
});
