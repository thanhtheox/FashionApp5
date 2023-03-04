import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';

const ChatWithUs = props => {
  return (
    <TouchableOpacity
      style={[
        styles.view,
        props.type === 'primary'
          ? styles.buttonPrimary
          : styles.buttonSecondary,
      ]}
      onPress={props.onPress}>
      <Text
        style={[
          styles.text,
          props.type === 'primary'
            ? styles.textButtonPrimary
            : styles.textButtonSecondary,
        ]}>
        CHAT WITH US
      </Text>
    </TouchableOpacity>
  );
};

export default ChatWithUs;

const styles = StyleSheet.create({
  view: {
    width: 187,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    width: 127,
    height: 24,
    fontFamily: FONT_FAMILY.TenorSans,
  },
  buttonPrimary: {
    backgroundColor: Color.TitleActive,
  },
  buttonSecondary: {
    borderColor: Color.White,
    borderWidth: 1,
  },
  textButtonPrimary: {
    color: Color.Background,
  },
  textButtonSecondary: {
    color: Color.TitleActive,
  },
});