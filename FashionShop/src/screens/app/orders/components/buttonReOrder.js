import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../../../../constants/color';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';

const ButtonReOrder = (props) => {
  return (
    <TouchableOpacity style={styles.button} disabled={true} onPress={() => {props.navigation.navigate("CartScreen")}}>
      <Text style={styles.text}>Thanh toán trực tiếp</Text>
    </TouchableOpacity>
  );
};

export default ButtonReOrder;

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.Primary,
    borderRadius: 4,
    width: scale(112),
    height: scale(31),
    justifyContent: 'center',
    alignSelf: 'flex-end',
   
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
