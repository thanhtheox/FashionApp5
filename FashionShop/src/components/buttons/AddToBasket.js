import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../../constants/color';
import scale from '../../constants/responsive';
import {IC_Heart, IC_Plus} from '../../assets/icons';
import FONT_FAMILY from '../../constants/fonts';

const AddToBasket = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.view}>
        <IC_Plus stroke={Color.White} style={styles.IcPlus} />
        <Text style={styles.text}>ADD TO BASKET</Text>
      </View>
      <IC_Heart stroke={Color.White} style={styles.IcHeart} />
    </TouchableOpacity>
  );
};

export default AddToBasket;

const styles = StyleSheet.create({
  container: {
    width: scale(375),
    height: scale(56),
    flexDirection: 'row',
    backgroundColor: Color.TitleActive,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    //height: scale(24),
    //width: scale(120),
    fontWeight: '1000',
    fontSize: scale(14),
    textAlign: 'center',
    color: Color.Background,
    fontFamily: FONT_FAMILY.JoseFinSansRegular,
  },
  // IcHeart: {
  //   top: scale(17.3),
  //   left: scale(154.19),
  // },
  // IcPlus: {
  //   left: scale(0),
  // },
  view: {
    width: scale(147.84),
    height: scale(24),
    // left: scale(16),
    // top: scale(17.92),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
