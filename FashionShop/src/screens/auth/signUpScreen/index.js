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
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth';

const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const signUpPayloadSchema = yup.object({
  firstName: yup.string()
  .max(30,'Invalid name')
  .required('Name cannot be blank'),
  lastName: yup.string()
  .max(30,'Invalid name')
  .required('Name cannot be blank'),
  email: yup
    .string()
    .email('Invalid email')
    .max(50, 'Email length must be less than 50 characters')
    .required('Email cannot be blank'),
  password: yup
    .string()
    .matches(passwordRegex,'Password must contain uppercase, lowercase and number characters')
    .min(6, 'Password length must be more than 6 characters')
    .max(16, 'Password length must be less than 16 characters')
    .required('Password can not be blank'),
  passConfirm: yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const SignUpScreen = (props) => {
  const {setAuth} = useAuth();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passConfirm: '',
    },
    resolver: yupResolver(signUpPayloadSchema),
  });

  const handleSignup = async (data) => {
    try {
      // console.log("🚀 ~ file: index.js:66 ~ handleSignup ~ data", data)
      setLoading(true);
      const response = await axios.post(
        '/signup',
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: mail, 
          password: pass,
          passConfirm: passConfirm,
        }),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        },
      );
      console.log('success', JSON.stringify(response.data));

      const accessToken = response?.data?.accessToken;
      setAuth({email: mail, accessToken});
      setLoading(false);
      navigation.navigate('AppStackScreen');
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
      console.log("🚀 ~ file: index.js:70 ~ handleSignup ~ error", error)
      console.log(error);
  };
}

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
