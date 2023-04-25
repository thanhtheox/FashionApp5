import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext, useRef} from 'react';
import color from '../../../constants/color';
import FONT_FAMILY from '../../../constants/fonts';
import { IC_BackwardArrow } from '../../../assets/icons';
import scale from '../../../constants/responsive';
import SaveButton from '../../../components/buttons/Save';
import axios from '../../../apis/axios';
import useAuth from '../../../hooks/useAuth';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const signInPayLoadSchema = yup.object({
  email: yup
    .string()
    .required('Email cannot be blank')
    .email('Invalid email')
    .max(50, 'Email length must be less than 50 characters'),
  password: yup
    .string()
    .required('Password can not be blank')
    .min(6, 'Password length must be more than 6 characters')
    .max(16, 'Password length must be less than 16 characters')
    .matches(
      passwordRegex,
      'Password must contain uppercase, lowercase and number characters',
    )

});

const SignInScreen = props => {
  const {setAuth} = useAuth();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');



  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInPayLoadSchema),
  });

  const handleSubmits = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        '/login',
        JSON.stringify({email: mail, password: pass}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        },
      );
      console.log('success', JSON.stringify(response.data));

      const accessToken = response?.data?.accessToken;
      setAuth({email: mail, accessToken});
      setLoading(false);
      props.navigation.navigate('AppStackScreen');
    } catch (err) {
      console.log('err', err.response.data);
      setErrorMessage(err.message);
      setLoading(false);
    }
  };

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
        {/* emailInput */}
        <Controller
          name="email"
          control={control}
          render={({field: {onChange, value}}) => (
            <View style={styles.inputMailBox}>
              <View style={styles.viewInput}>
              <TextInput
                onChangeText={email => [onChange(email), setMail(email)]}
                placeholder="Email"
                value={value}
                placeholderTextColor={color.GraySolid}
                style={styles.inputText}
                keyboardType="email-address"
              />
              </View>
              {errors?.email && (
                <Text style={styles.textFailed}>{errors.email.message}</Text>
              )}
            </View>
          )}
        />

        {/* passwordInput */}
        <Controller
          name="password"
          control={control}
          render={({field: {onChange, value}}) => (
            <View style={styles.inputMailBox}>
              <View style={styles.viewInput}>
              <TextInput
                secureTextEntry={true}
                onChangeText={password =>[ onChange(password),setPass(password)]}
                value={value}
                placeholder="Password"
                placeholderTextColor={color.GraySolid}
                style={styles.inputText}
              />
              </View>
              {errors?.password && (
                <Text style={styles.textFailed}>{errors.password.message}</Text>
              )}
            </View>
          )}
        />

        <View style={styles.buttonSignIn}>
          <SaveButton
            text={'Sign In'}
            onPress={handleSubmit(handleSubmits)}
            loading={loading}
          />
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
    justifyContent: 'flex-end',
  },
  viewIcon: {
    marginLeft: scale(30),
    width: scale(40),
    height: scale(30),
    marginTop: scale(23),
    alignItems: 'center',
  },
  ViewTitleText: {
    marginLeft: scale(30),
    marginBottom: scale(30),
  },
  textTile: {
    color: color.White,
    fontSize: 36,
    // fontFamily: FONT_FAMILY.JoseFinSans,
    fontFamily: FONT_FAMILY.Regular,
    fontWeight: 700,
  },
  textLabel: {
    color: color.White,
    fontSize: 18,
    // fontFamily: FONT_FAMILY.JoseFinSans,
    fontFamily: FONT_FAMILY.Regular,

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
    height: scale(75),
    justifyContent:'center',
  },
  viewInput:{
    height: scale(100),
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
    borderColor: color.GraySolid,

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
  textFailed: {
    paddingLeft: scale(25),
    marginTop: scale(7),
    justifyContent: 'center',
    fontFamily: FONT_FAMILY.Italic,
    fontSize: scale(12),
    color: color.RedSolid,
  },
});
