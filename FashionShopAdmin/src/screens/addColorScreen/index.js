import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {TriangleColorPicker} from 'react-native-color-picker';
import {validateHTMLColorHex} from 'validate-color';

//component
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import {IC_Backward} from '../../assets/icons';
import scale from '../../constants/responsive';
import SaveButton from '../../components/buttons/Save';
import UnderLine from '../../components/underLineSwitch/underLineSwitch';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Message from '../../components/alearts.js/messageOnly';


const addColorSchema = yup.object({
  name: yup
    .string()
    .required('Name cannot be blank')
    .min(1, 'A name must have minimum of 1 character')
    .max(100, 'A name must have maximum of 100 character'),
  code: yup.string().required('Code cannot be blank'),
});

const AddColorScreen = props => {
  const [text, onChangeText] = useState('');
  const [textColorPicker, onChangeTextColorPicker] = useState('#fffffff');
  const [textColor, onChangeTextColor] = useState('#ffffff');
  const [chosen, setChosen] = useState('hex');
  const [valid, setValid] = useState(true);
  const axiosPrivate = useAxiosPrivate();
  const [loading, setLoading] = useState(false);

  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  // yup
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      code: null,
    },
    resolver: yupResolver(addColorSchema),
  });

  const handleSubmits = async (name, code) => {
    try {
      setLoading(true);
      const response = await axiosPrivate.post(
        '/post-create-color',
        JSON.stringify({name: name, code: code}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        },
      );
      console.log('success', JSON.stringify(response.data));
      setTitle('Success');
      setMessage(
        `New color with Name: ${name} and Code: ${code} has been created`,
      );
      setLoading(false);
    } catch (err) {
      console.log('err', err.response.data);
      setTitle('Error');
      setMessage(err.response.data.error);
      setLoading(false);
    } finally {
      setVisible(true);
    }
  };

  const validateHex = text => {
    onChangeTextColor(text);
    console.log(textColor);
    if (validateHTMLColorHex(text)) {
      setValid(true);
      console.log(true);
      return true;
    } else {
      console.log(true);
      setValid(false);
      return false;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <IC_Backward stroke={color.White}></IC_Backward>
        </TouchableOpacity>
        <View>
          <Text style={styles.textHeader}>Add color</Text>
        </View>
      </View>
      {/* body */}
      <View style={styles.body}>
        <View style={{flexDirection: 'row'}}>
          <UnderLine
            text={'Enter hex code'}
            name={'hex'}
            onPress={() => setChosen('hex')}
            chosen={chosen}
          />
          <UnderLine
            text={'Color picker'}
            name={'pick'}
            onPress={() => setChosen('pick')}
            chosen={chosen}
          />
        </View>
        <View style={styles.viewTextTitle}>
          <Text style={styles.textTitle}>Color information</Text>
        </View>
        <Controller
          name="name"
          control={control}
          render={({field: {onChange, value}}) => (
            <>
              <View style={styles.viewTextInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Name ..."
                  placeholderTextColor={color.GraySolid}
                  editable
                  numberOfLines={1}
                  maxLength={30}
                  onChangeText={text => [onChangeText(text), onChange(text)]}
                  keyboardType="ascii-capable"
                  value={value}
                />
              </View>
              {errors?.name && (
                <Text style={styles.textFailed}>{errors.name.message}</Text>
              )}
            </>
          )}
        />

        {chosen === 'hex' ? (
          <>
            <View style={styles.viewTextLabel}>
              <Text style={styles.textLabel}>Color code</Text>
            </View>
            
              <Controller
                name="code"
                control={control}
                render={({field: {onChange, value}}) => (
                  <>
                  <View style={styles.viewAdd}>
                    <View style={styles.viewInputAdd}>
                      <TextInput
                        style={styles.textInput}
                        placeholder="#ffffff"
                        placeholderTextColor={color.GraySolid}
                        editable
                        numberOfLines={1}
                        maxLength={7}
                        onChangeText={text => [
                          validateHex(text),
                          onChange(text),
                        ]}
                        keyboardType="ascii-capable"
                        value={value}
                      />
                    </View>
                    <View
                style={{
                  width: '40%',
                  height: scale(40),
                  borderWidth: 1,
                  backgroundColor: textColor,
                }}></View>
            </View>
                    {errors?.code && (
                      <Text style={[styles.textFailed,{marginLeft: scale(10)}]}>
                        {errors.code.message}
                      </Text>
                    )}
                  </>
                )}
              />

              
            {valid ? null : (
              <Text style={styles.textWarning}>Invalid hex value</Text>
            )}
          </>
        ) : null}
        {chosen === 'pick' ? (
          <>
            <View style={styles.viewTextLabel}>
              <Text style={styles.textLabel}>Color code</Text>
            </View>
            <View style={styles.viewAdd}>
              <View style={styles.viewInputAdd}>
                <Text style={styles.textInput}>{textColorPicker}</Text>
              </View>
            </View>

            <View style={styles.colorView}>
              <TriangleColorPicker
                onColorSelected={color => onChangeTextColorPicker(color)}
                style={{flex: 1}}
              />
            </View>
          </>
        ) : null}

        <View style={styles.button}>
          {chosen === 'hex' ? (
            <SaveButton
              text={'Add color'}
              onPress={
                handleSubmit(() => handleSubmits(text, textColor))
              }
            />
          ) : (
            <SaveButton
              text={'Add color'}
              onPress={
                handleSubmit(() => handleSubmits(text, textColorPicker))
              }
            />
          )}
        </View>
      </View>
      <Message
        visible={visible}
        title={title}
        clickCancel={() => {
          if (title === 'Success') {
            props.navigation.goBack();
          } else {
            setVisible(false);
          }
        }}
        message={message}
      />
    </SafeAreaView>
  );
};

export default AddColorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: color.TitleActive,
    flex: 0.1,
    alignItems: 'center',
  },
  textHeader: {
    color: color.White,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 24,
    fontWeight: '600',
  },
  body: {
    flex: 0.9,
    backgroundColor: color.White,
  },
  viewTextTitle: {
    marginLeft: scale(15),
    marginTop: scale(15),
  },
  textTitle: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 22,
    fontWeight: '500',
  },
  viewTextInput: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderColor: color.GraySolid,
    marginTop: scale(10),
  },
  textInput: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: scale(10),
  },
  viewTextLabel: {
    marginTop: scale(30),
    marginLeft: scale(30),
  },
  textLabel: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 14,
    fontWeight: '400',
  },
  textWarning: {
    color: 'red',
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: scale(30),
  },
  viewAdd: {
    flexDirection: 'row',
    marginTop: scale(10),
    marginLeft: scale(30),
    alignItems: 'center',
  },
  viewInputAdd: {
    borderWidth: 1,
    width: '40%',
    marginRight: scale(50),
    height: scale(40),
    justifyContent: 'center',
  },

  colorView: {
    height: Dimensions.get('screen').height * 0.3,
    padding: scale(15),
  },
  button: {
    marginTop: scale(70),
    flex: 0.15,
    alignItems: 'center',
  },

  //fail
  textFailed: {
    paddingLeft: scale(25),
    justifyContent: 'center',
    fontFamily: FONT_FAMILY.Italic,
    fontSize: scale(12),
    color: color.RedSolid,
  },
});
