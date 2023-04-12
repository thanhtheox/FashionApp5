import {
    Keyboard,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ActivityIndicator
  } from 'react-native';
  import React, {useState} from 'react';
  import color from '../../../constants/color';
  import { IC_BackwardArrow } from '../../../assets/icons';
  import scale from '../../../constants/responsive';
  import FONT_FAMILY from '../../../constants/fonts';
  import SaveButton from '../../../components/buttons/Save';
  import {useRef} from 'react';

  
  const OTPScreen = props => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fifthInput = useRef();
    const sixthInput = useRef();
    const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: ''});
    
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.viewIcon} onPress={() => props.navigation.goBack()}>
                    <IC_BackwardArrow stroke={color.White} />
                </TouchableOpacity>

                <View style={styles.ViewTitleText}>
                <Text style={styles.textTile}>Enter OTP</Text>
                <Text numberOfLines={2} style={styles.textLabel}>Please enter verification code sent to your email</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.otpContainer}>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="ascii-capable-number-pad"
                            maxLength={1}
                            ref={firstInput}
                            onChangeText={text => {
                            setOtp({...otp, 1: text});
                            text && secondInput.current.focus();
                            }}
                        />
                        
                        
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="ascii-capable-number-pad"
                            maxLength={1}
                            ref={secondInput}
                            onChangeText={text => {
                            setOtp({...otp, 2: text});
                            text ? thirdInput.current.focus() : firstInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="ascii-capable-number-pad"
                            maxLength={1}
                            ref={thirdInput}
                            onChangeText={text => {
                            setOtp({...otp, 3: text});
                            text ? fourthInput.current.focus() : secondInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="ascii-capable-number-pad"
                            maxLength={1}
                            ref={fourthInput}
                            onChangeText={text => {
                            setOtp({...otp, 4: text});
                            text ? fifthInput.current.focus() : thirdInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="ascii-capable-number-pad"
                            maxLength={1}
                            ref={fifthInput}
                            onChangeText={text => {
                            setOtp({...otp, 5: text});
                            text ? sixthInput.current.focus() : fourthInput.current.focus();
                            }}
                        />
                    </View>
                    <View style={styles.otpBox}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="ascii-capable-number-pad"
                            maxLength={1}
                            ref={sixthInput}
                            onChangeText={text => {
                            setOtp({...otp, 6: text});
                            !text && fifthInput.current.focus();
                            }}
                        />
                    </View>
                </View>
    
                <View style={styles.buttonVerification}>
                    <SaveButton text={'Verify'} onPress={() => props.navigation.navigate('AppStackScreen')}/>
                </View>
                <View style={styles.checkVerification}>
                    <Text style={styles.question}>Did not get an OTP code?</Text>
                    <TouchableOpacity>
                        <Text style={styles.resendOTP}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
         
            </View>
            </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  };
  
  export default OTPScreen;
  
  const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: color.Background,
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
        width: scale(250),
      },
      body: {
        flex: 0.7,
        backgroundColor: color.White,
        alignItems: 'center',
      },
    otpContainer: {
        marginTop: scale(91),
        alignItems: 'center',
        flexDirection: 'row',
    },
    otpBox: {
        borderColor: color.GraySolid,
        borderWidth: scale(1),
        width: scale(45),
        height: scale(50),
        marginHorizontal: scale(5),
    },
    otpText: {
        fontSize: scale(25),
        color: color.Black,
        textAlign: 'center',
    },
    buttonVerification: {
        marginTop: scale(90),
      },
    textFailed: {
        paddingLeft: scale(25),
        paddingTop: scale(17),
        justifyContent: 'center',
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(12),
        color: color.Red,
    },
    checkVerification: {
        marginVertical: scale(20),
        color: color.GraySolid,
        fontSize: 18,
        fontFamily: FONT_FAMILY.JoseFinSans,
        fontWeight: 200,
        alignItems: 'center',
    }
});
