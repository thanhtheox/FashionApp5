import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../../../../constants/color';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';

const ButtonOrder = (props) => {
  return (
    <TouchableOpacity style={styles.button}  onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonOrder;

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.TitleActive,
    borderRadius: 4,
    width: scale(112),
    height: scale(31),
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight:scale(7)
  },
  text: {
    paddingHorizontal: scale(3),
    color: color.OffWhite,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(10),
    alignSelf: 'center',
    textAlign: 'center',
  },
});
