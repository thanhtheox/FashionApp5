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
import {
  IC_Rating,
  IC_Success,
  IC_Normal,
  IC_Satisfy,
  IC_Unsatisfy,
} from '../../../../../assets/icons';
import {Controller, useForm} from 'react-hook-form';
import MultiLine from '../../../../../components/textFormat/mutiLine';
import Custom_Header from '../../../../../components/header/Custom_Header';

const OrderSuccess = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [code, setCode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    // mode: 'onChange',
    // defaultValues: {
    //   firstName: userInfo.firstName,
    //   lastName: userInfo.lastName,
    //   // email: '',
    //   phoneNumber: userInfo.phoneNumber,
    //   password: '',
    //   passwordConfirm: '',
    // },
    // resolver: yupResolver(signUpPayloadSchema),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Custom_Header />
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
        <View style={styles.icon}>
          <TouchableOpacity>
            <IC_Unsatisfy />
          </TouchableOpacity>
          <TouchableOpacity>
            <IC_Normal />
          </TouchableOpacity>
          <TouchableOpacity>
            <IC_Satisfy />
          </TouchableOpacity>
        </View>
        <View style={styles.commentBox}>
          <Controller
            name="detail"
            control={control}
            render={({field: {onChange, value}}) => (
              <>
                <MultiLine
                  name="detail"
                  keyboardType="default"
                  onChangeText={detail => onChange(detail)}
                  style={styles.comment}
                />
              </>
            )}
          />
        </View>
        <View
          style={{
            marginTop: scale(30),
            //marginLeft: scale(15),
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            width: scale(320),
          }}>
          <View style={styles.submit}>
            <Text style={styles.submitText}>SUBMIT</Text>
          </View>
          <View style={styles.backHome}>
            <Text style={styles.backText}>BACK TO HOME</Text>
          </View>
        </View>
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
    justifyContent: 'space-between',
  },
  icon: {
    alignSelf: 'center',
    marginTop: scale(20),
    width: scale(150),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  successText: {
    color: color.TitleActive,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
    alignSelf: 'center',
    marginTop: scale(10),
  },
  submit: {
    //marginLeft: scale(-55),
    width: scale(150),
    height: scale(48),
    backgroundColor: color.TitleActive,
    justifyContent: 'center',
  },
  submitText: {
    color: color.White,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,

    alignSelf: 'center',
  },
  backHome: {
    width: scale(150),
    height: scale(48),
    backgroundColor: color.White,
    justifyContent: 'center',
    borderWidth: 1,
  },
  backText: {
    color: color.TitleActive,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
    alignSelf: 'center',
  },
  comment: {
    width: scale(300),
    height: scale(200),
    alignSelf: 'center',
  },
  commentBox: {
    marginTop: scale(10),
    width: scale(380),
    height: scale(200),
    alignItems: 'center',
  },
});
