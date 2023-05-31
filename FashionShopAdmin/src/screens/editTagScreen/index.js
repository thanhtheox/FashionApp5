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
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import {IC_Backward} from '../../assets/icons';
import scale from '../../constants/responsive';
import SaveButton from '../../components/buttons/Save';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Message from '../../components/alearts.js/messageOnly';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const addTagSchema = yup.object({
  name: yup
    .string()
    .required('Name cannot be blank')
    .min(1, 'A name must have minimum of 1 character')
    .max(100, 'A name must have maximum of 100 character'),
});

const EditTagScreen = props => {
  const [text, onChangeText] = useState('');
  const {tag} = props.route.params;
  console.log({tag});
  const axiosPrivate = useAxiosPrivate();
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // yup
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: tag.name,
    },
    resolver: yupResolver(addTagSchema),
  });

  const handleSubmits = async name => {
    try {
      setLoading(true);
      const response = await axiosPrivate.put(
        `/put-update-tag/${tag._id}`,
        JSON.stringify({name: name, isDelete: tag.isDeleted}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        },
      );
      console.log('success', JSON.stringify(response.data));
      setTitle('Success');
      setMessage(`Your tag has been update`);
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <IC_Backward stroke={color.White}></IC_Backward>
        </TouchableOpacity>
        <View>
          <Text style={styles.textHeader}>Edit Tag</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.viewTextTitle}>
          <Text style={styles.textTitle}>Tag information</Text>
        </View>

        {/* name */}
        <Controller
          name="name"
          control={control}
          render={({field: {onChange, value}}) => (
            <View>
              <View style={styles.viewTextInput}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Name ..."
                  placeholderTextColor={color.GraySolid}
                  editable
                  numberOfLines={1}
                  maxLength={30}
                  onChangeText={text => [onChange(text), onChangeText(text)]}
                  keyboardType="ascii-capable"
                  value={value}
                />
              </View>
              {errors?.name && (
                <Text style={styles.textFailed}>{errors.name.message}</Text>
              )}
            </View>
          )}
        />

        <View style={styles.button}>
          <SaveButton
            text={'Edit Tag'}
            loading={loading}
            onPress={handleSubmit(() => handleSubmits(text))}></SaveButton>
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

export default EditTagScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: color.TitleActive,
    height: Dimensions.get('screen').height * 0.1,
    alignItems: 'center',
  },
  textHeader: {
    color: color.White,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    height: Dimensions.get('screen').height * 0.9,
    backgroundColor: color.White,
    paddingLeft: scale(15),
    paddingTop: scale(15),
    gap: scale(15),
  },
  viewTextTitle: {},
  textTitle: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 22,
    fontWeight: '700',
  },
  viewTextInput: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderColor: color.GraySolid,
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
  viewAdd: {
    flexDirection: 'row',
    marginTop: scale(30),
    marginLeft: scale(30),
    alignItems: 'center',
  },
  viewTextAdd: {
    width: '20%',
  },
  textAdd: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 16,
    fontWeight: '400',
  },
  viewInputAdd: {
    borderWidth: 1,
    width: '30%',
  },
  button: {
    marginTop: scale(70),
    flex: 0.15,
    alignItems: 'center',
  },
  checkView: {width: scale(130), gap: scale(10), margin: scale(15)},

  //fail
  textFailed: {
    paddingLeft: scale(25),
    // marginTop: scale(7),
    justifyContent: 'center',
    fontFamily: FONT_FAMILY.Italic,
    fontSize: scale(12),
    color: color.RedSolid,
  },
});
