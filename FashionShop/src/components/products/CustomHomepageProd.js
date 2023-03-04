import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import scale from '../../constants/responsive';
import {IMG_ModelOne} from '../../assets/images/index';
import FONT_FAMILY from '../../constants/fonts';
import Color from '../../constants/color';

const Custom_HomepageProd = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={props.image} style={styles.img} resizeMode={'contain'} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.prodName}>{props.prodName}</Text>
        <Text style={styles.prodPrice}>{props.prodPrice}</Text>
      </View>
    </View>
  );
};

export default Custom_HomepageProd;

const styles = StyleSheet.create({
  container: {
    width: scale(165),
    height: scale(260.16),
    borderWidth: 1,
  },
  imgContainer: {
    width: scale(165),
    height: scale(200),
  },
  img: {
    position: 'absolute',
    width: scale(165),
    height: scale(200),
  },
  textContainer: {
    width: scale(165),
    height: scale(60.16),
    borderWidth: 1,
  },
  prodName: {
    fontFamily: FONT_FAMILY.TenorSans,
    fontSize: scale(11),
    color: Color.Body,
    textAlign: 'center',
  },
  prodPrice: {
    fontFamily: FONT_FAMILY.TenorSans,
    fontSize: scale(15),
    color: Color.Secondary,
    textAlign: 'center',
  },
});
