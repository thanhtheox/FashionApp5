import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../../constants/color';
import scale from '../../constants/responsive';
import {IC_ShoppingBag} from '../../assets/icons';
import FONT_FAMILY from '../../constants/fonts';

const SubmitLeft = props => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.type === 'primary'
          ? styles.buttonPrimary
          : styles.buttonSecondary,
      ]}
      onPress={props.onPress}>
      <IC_ShoppingBag
        stroke={props.type === 'primary' ? Color.White : Color.TitleActive}
        style={[
          props.type === 'primary' ? styles.iconPrimary : styles.iconSecondary,
        ]}></IC_ShoppingBag>
      <Text
        style={[
          styles.text,
          props.type === 'primary' ? styles.textPrimary : styles.textSecondary,
        ]}>
        SUBMIT
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitLeft;

const styles = StyleSheet.create({
  container: {
    width: scale(172),
    height: scale(48),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '400',
    fontSize: scale(16),
    textAlign: 'center',
    fontFamily: FONT_FAMILY.TenorSans,
  },
  buttonPrimary: {
    backgroundColor: Color.TitleActive,
  },
  buttonSecondary: {
    borderColor: Color.White,
    borderWidth: 1,
  },
  textPrimary: {
    color: Color.Background,
  },
  textSecondary: {
    color: Color.TitleActive,
  },
  iconPrimary: {
    left: scale(-24.16),
  },
  iconSecondary: {
    left: scale(-24.16),
  },
});
