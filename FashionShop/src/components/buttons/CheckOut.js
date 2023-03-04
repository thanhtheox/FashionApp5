import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../../constants/color';
import scale from '../../constants/responsive';
import {IC_ShoppingBag} from '../../assets/icons';
import FONT_FAMILY from '../../constants/fonts';

const CheckOut = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <IC_ShoppingBag stroke={Color.White} style={styles.icon} />
      <Text style={styles.text}>CHECKOUT</Text>
    </TouchableOpacity>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    width: scale(375),
    height: scale(56),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.TitleActive,
  },
  text: {
    top: scale(4),
    height: scale(24),
    width: scale(120),
    fontWeight: '400',
    fontSize: scale(14),
    textAlign: 'center',
    color: Color.Background,
    fontFamily: FONT_FAMILY.TenorSans,
  },
  icon: {
    top: scale(0),
    left: scale(-25.67),
  },
});
